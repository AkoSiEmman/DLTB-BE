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
exports.GetUserByEmailController = exports.AuthenticationController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const AuthService_1 = __importDefault(require("../services/AuthService"));
const UserService_1 = __importDefault(require("../services/UserService"));
function AuthenticationController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const authUser = yield AuthService_1.default.Auth(request.body);
            if (authUser.status === 0) {
                const token = request.body.email;
                response.cookie('authToken', token, {
                    httpOnly: true,
                    maxAge: 3600000,
                    secure: false,
                    path: '/',
                    domain: 'localhost',
                });
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: authUser.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: authUser.status,
                            message: authUser.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: authUser.response
                });
            }
        }
        catch (e) {
            console.error("Error in authentication controller " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Authentication failed!",
                        dateTime: responseDate,
                    }] });
        }
    });
}
exports.AuthenticationController = AuthenticationController;
function GetUserByEmailController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserService_1.default.GetUserByEmail(request.params.email);
            if (user.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: user.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: user.status,
                            message: user.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: user.response
                });
            }
        }
        catch (e) {
            console.error("Error in authentication controller " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Authentication failed!",
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }] });
        }
    });
}
exports.GetUserByEmailController = GetUserByEmailController;
//# sourceMappingURL=AuthenticationController.js.map