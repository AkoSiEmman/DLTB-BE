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
exports.AddCooperativeController = exports.GetAllCooperativeController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const CooperativeService_1 = __importDefault(require("../services/CooperativeService"));
function GetAllCooperativeController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allUsers = yield CooperativeService_1.default.GetData();
            if (allUsers.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: allUsers.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: allUsers.status,
                            message: allUsers.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: allUsers.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllCooperativeController = GetAllCooperativeController;
function AddCooperativeController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newStation = yield CooperativeService_1.default.AddData(request.body);
            if (newStation.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: newStation.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newStation.status,
                            message: newStation.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: newStation.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.AddCooperativeController = AddCooperativeController;
//# sourceMappingURL=CooperativeController.js.map