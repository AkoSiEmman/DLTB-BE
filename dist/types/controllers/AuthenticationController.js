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
exports.AuthenticationController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const AuthService_1 = __importDefault(require("../services/AuthService"));
function AuthenticationController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const authUser = yield AuthService_1.default.CheckIfCardUserMatch(request.body);
            if (authUser === true) {
                const token = request.body.username;
                response.cookie('authToken', token, {
                    httpOnly: true,
                    maxAge: 3600000,
                    secure: false,
                    path: '/',
                    domain: 'localhost',
                });
                response.status(200).json({ messages: [
                        { code: "0", dateTime: responseDate, message: "OK" }
                    ] });
            }
            else {
                response.status(201).json({ messages: [{
                            code: "212",
                            message: "Invalid user account or password",
                            dateTime: responseDate,
                        }] });
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
//# sourceMappingURL=AuthenticationController.js.map