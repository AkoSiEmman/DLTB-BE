"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const TORMainRepository_1 = __importDefault(require("../repositories/TORMainRepository"));
const SessionService_1 = require("./SessionService");
class TORMainService {
    GetAllTORMain() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tormMains = TORMainRepository_1.default.GetAllTORMain();
                return tormMains;
            }
            catch (e) {
                console.error("Error in service: " + e);
                return false;
            }
        });
    }
    GetAllTORMainFromServer() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield (0, SessionService_1.TORGenerateSessionService)();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const bodyParameters = {
                    "query": [{ "remarks": "test" }, { "remarks": "live" }]
                };
                const requestGetEmployeeFromOtherServer = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_main/_find", bodyParameters, config);
                requestGetEmployeeFromOtherServer.data.response.data.map((torMain) => __awaiter(this, void 0, void 0, function* () {
                    if (JSON.stringify(yield this.SearchTORMainService(torMain.fieldData.UUID)) === '[]') {
                        const request = yield this.CreateTORMainService(torMain);
                        console.log("This is request" + request);
                    }
                    else {
                        yield this.UpdateTORMainService(torMain);
                    }
                }));
                const deleteToken = yield (0, SessionService_1.TOREndSessionService)(token);
                return requestGetEmployeeFromOtherServer.data;
            }
            catch (e) {
                console.error("Error in service: " + e);
                return false;
            }
        });
    }
    CreateTORMainService(fieldData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torMain = {
                    portalData: [],
                    recordId: "",
                    modId: "",
                    fieldData: fieldData.fieldData,
                };
                const newTorMain = TORMainRepository_1.default.CreateNewTORMain(torMain);
                return true;
            }
            catch (e) {
                console.error("Error in create tor main service: " + e);
                return false;
            }
        });
    }
    UpdateTORMainServiceToOtherServer(tor, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield (0, SessionService_1.TORGenerateSessionService)();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const bodyParameters = {
                    "fieldData": tor.fieldData
                };
                const url = `https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_main/records/${recordId}`;
                const addNewTorInOtherServer = yield axios_1.default.patch(url, bodyParameters, config);
                const responseAddNewTorInOtherServer = yield addNewTorInOtherServer.data;
                const deleteToken = yield (0, SessionService_1.TOREndSessionService)(token);
                return true;
            }
            catch (e) {
                console.error("Error in update tor main to other server service: " + e);
                return false;
            }
        });
    }
    UpdateTORMainService(tor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateTORMain = yield TORMainRepository_1.default.UpdateTORMainPerUUID(tor);
                return updateTORMain;
            }
            catch (e) {
                console.error("Error in tor main service: " + e);
                return false;
            }
        });
    }
    SearchTORMainService(UUID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torMain = yield TORMainRepository_1.default.SearchTORMainPerUUID(UUID);
                return torMain;
            }
            catch (e) {
                console.error("Error in search tormain service: " + e);
                return {};
            }
        });
    }
    SyncTORMainService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torMains = yield TORMainRepository_1.default.GetAllTORMain();
                if (torMains && Array.isArray(torMains)) {
                    for (const torMain of torMains) {
                        if (torMain.fieldData && Array.isArray(torMain.fieldData) && torMain.fieldData.length > 0) {
                            for (const fieldData of torMain.fieldData) {
                                if (yield this.CheckIfUUIDAllowedToInsertService(fieldData)) {
                                }
                                else {
                                    console.log("UUID NOT ALLOWED TO INSERT");
                                }
                            }
                        }
                    }
                }
                else {
                    console.log("No torMains found or it's not an array.");
                }
            }
            catch (e) {
                console.error("Error in sync tor main service: " + e);
                return { status: 500, message: "Error in sync tor main service: " + e };
            }
        });
    }
    CheckIfUUIDAllowedToInsertService(UUID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield (0, SessionService_1.TORGenerateSessionService)();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const bodyParameters = {
                    "query": [{ "UUID": UUID }]
                };
                const url = `https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_main/_find`;
                const request = yield axios_1.default.post(url, bodyParameters, config);
                const deleteToken = yield (0, SessionService_1.TOREndSessionService)(token);
                const response = request.data;
                if (response.response.dataInfo.returnedCount < 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                return true;
            }
        });
    }
}
exports.default = new TORMainService();
//# sourceMappingURL=TORMainService.js.map