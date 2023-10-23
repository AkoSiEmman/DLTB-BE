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
const Bcrypt_1 = require("../common/Bcrypt");
const CardUserRepository_1 = require("../repositories/CardUserRepository");
class CardUserService {
    AddCardUserService(newCardUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const generateHashPassword = yield (0, Bcrypt_1.GenerateHashPassword)(newCardUser.password);
                newCardUser = Object.assign(Object.assign({}, newCardUser), { password: generateHashPassword });
                const addCardUser = yield CardUserRepository_1.cardUserRepo.CreateNewCardUser(newCardUser);
                return true;
            }
            catch (e) {
                console.error("Error in card user service : " + e);
                return false;
            }
        });
    }
    GetCardUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getCardUser = yield CardUserRepository_1.cardUserRepo.GetCardUserByUsername(username);
                return getCardUser;
            }
            catch (e) {
                console.error("Error in card user service: " + e);
                return false;
            }
        });
    }
}
exports.default = new CardUserService();
//# sourceMappingURL=CardUserService.js.map