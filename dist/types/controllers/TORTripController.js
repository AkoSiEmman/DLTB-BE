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
exports.CreateTORTripController = exports.GetAllTORTripController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORTripServices_1 = __importDefault(require("../services/TORTripServices"));
function GetAllTORTripController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const createTicket = yield TORTripServices_1.default.GetAllTORTrip();
            if (createTicket.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: createTicket.response
                });
            }
            else {
                response.status(200).json({ messages: [{
                            code: "1",
                            message: "One of the fields must be unique",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
        }
        catch (e) {
            console.error("Error in getting all tor trip controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllTORTripController = GetAllTORTripController;
function CreateTORTripController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newTORTrip = yield TORTripServices_1.default.AddNewTORTrip(request.body);
            if (newTORTrip.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newTORTrip.response
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
            console.error("Error in creating new tor trip controller: " + e);
        }
    });
}
exports.CreateTORTripController = CreateTORTripController;
//# sourceMappingURL=TORTripController.js.map