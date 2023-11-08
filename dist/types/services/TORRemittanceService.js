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
const TORRemittanceRepository_1 = __importDefault(require("../repositories/TORRemittanceRepository"));
class TORRemittanceService {
    SyncGetAllRemittance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.GenerateSession();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const bodyParameters = {
                    "query": [{ "bound": "SOUTH" }, { "bound": "NORTH" }]
                };
                const request = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_remittance/_find", bodyParameters, config);
                const response = yield request.data;
                console.log(response.response.data);
                response.response.data.map((remittance) => __awaiter(this, void 0, void 0, function* () {
                    yield TORRemittanceRepository_1.default.FindOneAndReplaceRemittance(remittance);
                }));
                const destroyToken = yield this.EndSession(token);
                return response.response.data;
            }
            catch (e) {
                console.error("Error in sync all tor remittance service: " + e);
                return false;
            }
        });
    }
    CreateTORRemittance(newTorRemittance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRemittance = yield TORRemittanceRepository_1.default.CreateTORRemittance(newTorRemittance);
                if (newRemittance) {
                    return { status: 0, message: "OK" };
                }
                else {
                    return { status: 1, message: "FAILED" };
                }
            }
            catch (e) {
                console.error("Error in create tor remittance service: " + e);
                return { status: 500, message: e };
            }
        });
    }
    CreateTORRemittanceSync(newTorRemittance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.GenerateSession();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const request = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_fuel/records", newTorRemittance, config);
                const response = yield request.data;
                const destroyToken = yield this.EndSession(token);
                return { status: 0, message: "OK" };
            }
            catch (e) {
                console.error("Error in create tor remittance service: " + e);
                return { status: 500, message: e };
            }
        });
    }
    GetAllTORRemittance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torRemittance = yield TORRemittanceRepository_1.default.GetAllTORRemittance();
                return torRemittance;
            }
            catch (e) {
                console.error("Error in get all tor remittance service: " + e);
                return false;
            }
        });
    }
    GenerateSession() {
        return __awaiter(this, void 0, void 0, function* () {
            let usernameCred = "filipay";
            let passwordCred = "";
            if (process.env.PASSWORD) {
                passwordCred = process.env.PASSWORD;
            }
            console.log("Username credentials " + usernameCred);
            console.log("Password credential " + passwordCred);
            try {
                const generateSession = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/", {}, {
                    auth: {
                        username: usernameCred,
                        password: passwordCred,
                    }
                });
                const token = yield generateSession.data.response.token;
                return token;
            }
            catch (e) {
                console.error("Error in generating session token " + e);
                return false;
            }
        });
    }
    EndSession(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const endSession = yield axios_1.default.delete("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/" + token);
                const response = yield endSession.data;
                if (response.messages.code === "0") {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.error("Error in endsession service: " + e);
                return false;
            }
        });
    }
}
exports.default = new TORRemittanceService();
//# sourceMappingURL=TORRemittanceService.js.map