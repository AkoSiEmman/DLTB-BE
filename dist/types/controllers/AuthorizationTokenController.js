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
exports.DeleteAuthorizationTokenController = exports.GenerateAuthorizationTokenConroller = void 0;
const AuthorizationTokenService_1 = __importDefault(require("../services/AuthorizationTokenService"));
const AuthorizationTokenRepository_1 = require("../repositories/AuthorizationTokenRepository");
const GetCurrentDate_1 = require("../common/GetCurrentDate");
function GenerateAuthorizationTokenConroller(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const AuthorizationToken = yield AuthorizationTokenService_1.default.AddUserAuthorizationToken();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "You have received a fresh token: ",
                        dateTime: responseDate,
                    }],
                response: { token: AuthorizationToken }
            });
        }
        catch (e) {
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in generating token: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GenerateAuthorizationTokenConroller = GenerateAuthorizationTokenConroller;
function DeleteAuthorizationTokenController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const deleteToken = yield AuthorizationTokenRepository_1.authorizationTokenRepo.DeleteToken(request.headers.authorization);
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "Token has been deleted!",
                        dateTime: responseDate,
                    }],
                response: [{}]
            });
        }
        catch (e) {
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in deleting token: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.DeleteAuthorizationTokenController = DeleteAuthorizationTokenController;
//# sourceMappingURL=AuthorizationTokenController.js.map