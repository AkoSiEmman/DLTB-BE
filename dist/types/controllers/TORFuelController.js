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
exports.GetAllTORFuelController = exports.CreateTORFuelController = exports.SyncGetAllTorFuelController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORFuelService_1 = __importDefault(require("../services/TORFuelService"));
function SyncGetAllTorFuelController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const toFuel = yield TORFuelService_1.default.SyncGETAllTORFuelService();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: toFuel
            });
        }
        catch (e) {
            console.error("Error in sync get all tor fuel controller: " + e);
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
exports.SyncGetAllTorFuelController = SyncGetAllTorFuelController;
function CreateTORFuelController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const createTorFuel = yield TORFuelService_1.default.CreateTORFuelService(request.body);
            if (createTorFuel.status === 0) {
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
            console.error("Error in sync get all tor fuel controller: " + e);
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
exports.CreateTORFuelController = CreateTORFuelController;
function GetAllTORFuelController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const torFuels = yield TORFuelService_1.default.GetAllTORFuelService();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: torFuels
            });
        }
        catch (e) {
            console.error("Error in sync get all tor fuel controller: " + e);
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
exports.GetAllTORFuelController = GetAllTORFuelController;
//# sourceMappingURL=TORFuelController.js.map