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
exports.cardUserRepo = void 0;
const CardUser_1 = __importDefault(require("../models/CardUser"));
class CardUserRepository {
    CreateNewCardUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const NewCardUser = new CardUser_1.default(newUser);
                const SaveNewCardUser = yield NewCardUser.save();
                return true;
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
    GetCardUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield CardUser_1.default.findOne({ "username": username });
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
}
exports.cardUserRepo = new CardUserRepository();
//# sourceMappingURL=CardUserRepository.js.map