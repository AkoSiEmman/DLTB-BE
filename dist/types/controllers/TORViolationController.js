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
exports.CreateNewTorViolationController = exports.GetAllTorViolationController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORViolationService_1 = __importDefault(require("../services/TORViolationService"));
function GetAllTorViolationController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const tors = yield TORViolationService_1.default.GetAllTOR();
            if (tors.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: tors.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: tors.status,
                            message: tors.message,
                            dateTime: responseDate,
                        }],
                    response: tors.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
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
exports.GetAllTorViolationController = GetAllTorViolationController;
function CreateNewTorViolationController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newTOR = yield TORViolationService_1.default.CreateTOR(request.body);
            if (newTOR.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newTOR.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newTOR.status,
                            message: newTOR.message,
                            dateTime: responseDate,
                        }],
                    response: newTOR.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
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
exports.CreateNewTorViolationController = CreateNewTorViolationController;
//# sourceMappingURL=TORViolationController.js.map