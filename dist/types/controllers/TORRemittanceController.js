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
exports.GetAllRemittanceController = exports.CreateTORRemittanceController = exports.SyncGetAllTORRemittanceController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORRemittanceService_1 = __importDefault(require("../services/TORRemittanceService"));
function SyncGetAllTORRemittanceController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = yield (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const getAllTorRemittance = yield TORRemittanceService_1.default.SyncGetAllRemittance();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: getAllTorRemittance
            });
        }
        catch (e) {
            console.error("Error in sync get all tor remittance controller: " + e);
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
exports.SyncGetAllTORRemittanceController = SyncGetAllTORRemittanceController;
function CreateTORRemittanceController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const createTORRemittance = yield TORRemittanceService_1.default.CreateTORRemittance(request.body);
            if (createTORRemittance.status === 0) {
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
            console.error("Error in creating new tor remittance controller: " + e);
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
exports.CreateTORRemittanceController = CreateTORRemittanceController;
function GetAllRemittanceController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const torRemittance = yield TORRemittanceService_1.default.GetAllTORRemittance();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: torRemittance
            });
        }
        catch (e) {
            console.error("Error in get all tor remittance controller: " + e);
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
exports.GetAllRemittanceController = GetAllRemittanceController;
//# sourceMappingURL=TORRemittanceController.js.map