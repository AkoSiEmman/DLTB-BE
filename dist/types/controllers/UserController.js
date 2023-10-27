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
exports.AddUserContorller = exports.GetUserByIdController = exports.GetAllUserController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const UserService_1 = __importDefault(require("../services/UserService"));
function GetAllUserController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allUsers = yield UserService_1.default.GetAllUser();
            if (allUsers.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: allUsers.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: allUsers.status,
                            message: allUsers.message,
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
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
                        dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllUserController = GetAllUserController;
function GetUserByIdController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserService_1.default.GetUserById(request.params.id);
            if (user.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: user.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: user.status,
                            message: user.message,
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: user.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                    }],
                response: {}
            });
        }
    });
}
exports.GetUserByIdController = GetUserByIdController;
function AddUserContorller(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newStation = yield UserService_1.default.AddUser(request.body);
            if (newStation.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: newStation.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newStation.status,
                            message: newStation.message,
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
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
                        dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                    }],
                response: {}
            });
        }
    });
}
exports.AddUserContorller = AddUserContorller;
//# sourceMappingURL=UserController.js.map