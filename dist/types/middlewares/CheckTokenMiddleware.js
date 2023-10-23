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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTokenMiddleware = void 0;
const AuthorizationTokenRepository_1 = require("../repositories/AuthorizationTokenRepository");
function CheckTokenMiddleware(request, response, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
            const isAuth = yield AuthorizationTokenRepository_1.authorizationTokenRepo.CheckIfExistToken(token);
            if (isAuth) {
                next();
            }
            else {
                console.log("Someone tries to connect to our protected routes without token / cookie");
                return response.status(401).json();
            }
        }
        catch (e) {
            console.error("Error in check token middleware: " + e);
            return response.status(500).json({ errorMessage: "Internal server error: " + e });
        }
    });
}
exports.CheckTokenMiddleware = CheckTokenMiddleware;
//# sourceMappingURL=CheckTokenMiddleware.js.map