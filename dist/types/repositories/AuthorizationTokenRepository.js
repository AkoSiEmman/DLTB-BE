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
exports.authorizationTokenRepo = void 0;
const AuthorizationTokenModel_1 = __importDefault(require("../models/AuthorizationTokenModel"));
class AuthorizationTokenRepository {
    CreateNewToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newToken = { "token": token };
                const authToken = new AuthorizationTokenModel_1.default(newToken);
                const saveAuthToken = yield authToken.save();
                return true;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
    FindToken(findToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield AuthorizationTokenModel_1.default.findOne({ "token": findToken });
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
    CheckIfExistToken(findToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield AuthorizationTokenModel_1.default.findOne({ "token": findToken });
                if (token) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.error("Error in repository " + e);
                return false;
            }
        });
    }
    DeleteToken(findToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (findToken) {
                    const token = yield AuthorizationTokenModel_1.default.findOneAndDelete({ "token": findToken.replace("Bearer ", "") });
                    if (token) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
}
exports.authorizationTokenRepo = new AuthorizationTokenRepository();
//# sourceMappingURL=AuthorizationTokenRepository.js.map