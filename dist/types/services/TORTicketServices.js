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
const TORTicketRepository_1 = __importDefault(require("../repositories/TORTicketRepository"));
class TORTicketServices {
    GetAllTORTicketService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torTickets = yield TORTicketRepository_1.default.GetAllTORTicket();
                return torTickets;
            }
            catch (e) {
                console.error("Error in getting all tor ticket services: " + e);
                return false;
            }
        });
    }
    SyncGetAllTORTicketService() {
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
                const requestTORTicketFromOtherServer = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_tickets/_find", bodyParameters, config);
                const responseTORTicketFromOtherServer = yield requestTORTicketFromOtherServer.data;
                const destroyToken = yield this.EndSession(token);
                console.log(responseTORTicketFromOtherServer.response.data);
                responseTORTicketFromOtherServer.response.data.map((torTicket) => __awaiter(this, void 0, void 0, function* () {
                    yield this.FindAndReplaceTORTicketServices(torTicket);
                }));
                return responseTORTicketFromOtherServer;
            }
            catch (e) {
                console.error("Error in syncing all tor ticket services: " + e);
                return false;
            }
        });
    }
    SyncTORTicketService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torTickets = yield this.GetAllTORTicketService();
                if (torTickets !== false) {
                    const insertTorTickets = yield (torTickets === null || torTickets === void 0 ? void 0 : torTickets.map((torTicket) => __awaiter(this, void 0, void 0, function* () {
                        yield this.CreateTORTicketServices(torTicket);
                    })));
                }
            }
            catch (e) {
                console.error("Error in syncing tor ticket service: " + e);
                return { status: 1, message: "" + e };
            }
        });
    }
    InsertTORTickeToOurDBServices(torTicket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveTicket = yield TORTicketRepository_1.default.CreateTORTicket(torTicket);
                return { status: 0, message: saveTicket };
            }
            catch (e) {
                console.error("Error in inserting ticket in database service" + e);
                return { status: 1, message: "" + e };
            }
        });
    }
    FindAndReplaceTORTicketServices(torTicket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const replaceTicket = yield TORTicketRepository_1.default.FindOneAndReplaceTORTicket(torTicket);
                return true;
            }
            catch (e) {
                console.error("Error in find and replace tor ticket service: " + e);
                return false;
            }
        });
    }
    CheckIfUUIDExistService(UUID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield this.GenerateSession();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const bodyParameters = {
                    "query": [{ "UUID": UUID }]
                };
                console.log(bodyParameters);
                const request = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_tickets/_find", bodyParameters, config);
                console.log(request);
                const destroyToken = yield this.EndSession(token);
                if (request.data.messages.code === "401") {
                    return { status: 0 };
                }
                else {
                    return { status: 1 };
                }
            }
            catch (e) {
                console.error("Error in check uuid: " + e);
                return { status: 500 };
            }
        });
    }
    CreateTORTicketServices(torTicket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let torTemp = JSON.parse(JSON.stringify(torTicket.fieldData[0]));
                delete torTemp._id;
                console.log("NEW TOR");
                console.log(torTemp);
                const newTor = {
                    "fieldData": torTemp
                };
                console.log(newTor);
                const token = yield this.GenerateSession();
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const requestCreateNewTORTicket = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/layouts/tor_tickets/records", newTor, config);
                const responseTORTicketFromOtherServer = yield requestCreateNewTORTicket.data;
                const destroyToken = yield this.EndSession(token);
                return { status: 0, message: "OK" };
            }
            catch (e) {
                console.error("Error in creating new tor ticket service: " + e);
                return { status: 500, message: e };
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
exports.default = new TORTicketServices();
//# sourceMappingURL=TORTicketServices.js.map