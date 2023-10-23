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
const Bcrypt_1 = require("../common/Bcrypt");
const CardUser_1 = __importDefault(require("../models/CardUser"));
class AuthService {
    CheckIfCardUserMatch(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let isAuth = false;
            try {
                const getCardUserPerEmail = yield CardUser_1.default.findOne({ username: data.username });
                if (getCardUserPerEmail) {
                    isAuth = yield (0, Bcrypt_1.CheckHashPassword)(data.password, getCardUserPerEmail.password);
                }
                return isAuth;
            }
            catch (e) {
                console.error("Error in service: " + e);
                return false;
            }
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map