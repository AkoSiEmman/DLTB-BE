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
const MasterCardRepository_1 = __importDefault(require("../repositories/MasterCardRepository"));
class MasterCardServices {
    GetAllMasterCard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const masterCards = yield MasterCardRepository_1.default.GetAllMasterCard();
                return masterCards;
            }
            catch (e) {
                console.error("Error in master card services: " + e);
                return false;
            }
        });
    }
    CreateNewMasterCard(masterCard) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMasterCard = yield MasterCardRepository_1.default.CreateNewMasterCard(masterCard);
                if (newMasterCard.code === 11000) {
                    return "Error duplicate field value";
                }
                else {
                    return newMasterCard;
                }
            }
            catch (e) {
                console.error("Error in master card services: " + e);
                return e;
            }
        });
    }
}
exports.default = new MasterCardServices();
//# sourceMappingURL=MasterCardServices.js.map