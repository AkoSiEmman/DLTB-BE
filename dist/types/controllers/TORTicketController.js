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
exports.SyncTORTicketController = exports.CreateTorTicketController = exports.SyncGetAllTicket = exports.GetAllTicketController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORTicketServices_1 = __importDefault(require("../services/TORTicketServices"));
function GetAllTicketController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const torTickets = yield TORTicketServices_1.default.GetAllTORTicketService();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: torTickets
            });
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting employees: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllTicketController = GetAllTicketController;
function SyncGetAllTicket(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const torTicket = yield TORTicketServices_1.default.SyncGetAllTORTicketService();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: torTicket
            });
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting employees: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.SyncGetAllTicket = SyncGetAllTicket;
function CreateTorTicketController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const insertTicketToDb = yield TORTicketServices_1.default.InsertTORTickeToOurDBServices(request.body);
            if (insertTicketToDb.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
            else {
                response.status(200).json({ messages: [{
                            code: "1",
                            message: "UUID must be unique",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in creating tor ticket: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.CreateTorTicketController = CreateTorTicketController;
function SyncTORTicketController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const syncTorTicket = yield TORTicketServices_1.default.SyncTORTicketService();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: syncTorTicket
            });
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in creating tor ticket: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.SyncTORTicketController = SyncTORTicketController;
//# sourceMappingURL=TORTicketController.js.map