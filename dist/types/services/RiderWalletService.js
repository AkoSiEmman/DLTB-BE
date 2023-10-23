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
const RiderWalletRepository_1 = __importDefault(require("../repositories/RiderWalletRepository"));
class RiderWalletService {
    GetAllRiderWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const riderWallets = yield RiderWalletRepository_1.default.GetAllRiderWallet();
                return { status: 0, message: "OK", response: riderWallets };
            }
            catch (e) {
                console.log(`Error in rider wallet services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    AddRiderWallet(riderWallet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRiderWallet = yield RiderWalletRepository_1.default.AddRiderWallet(riderWallet);
                return { status: 0, message: "OK", response: newRiderWallet };
            }
            catch (e) {
                console.log(`Error in rider wallet services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    UpdateRiderWalletByCardId(cardId, decreaseAmount, increaseAmount, cardType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cardId !== undefined && decreaseAmount !== null && increaseAmount !== null && cardType !== undefined) {
                    if (cardType === "mastercard") {
                        const findCardIdInMasterCard = yield MasterCardRepository_1.default.FindCardIdInMasterCard(cardId);
                        if (findCardIdInMasterCard) {
                            const updateBalance = yield MasterCardRepository_1.default.UpdateMasterCardBalanceByCardId(cardId, decreaseAmount, increaseAmount);
                            return { status: 0, message: "OK", response: updateBalance };
                        }
                        else {
                            return { status: 1, message: "Card is not yet registered", response: {} };
                        }
                    }
                    if (cardType === "discountedcard" || cardType === "regularcard") {
                        const findCardIdInDiscountedCard = yield RiderWalletRepository_1.default.FindCardInRiderWallet(cardId);
                        if (findCardIdInDiscountedCard) {
                            const updateBalance = yield RiderWalletRepository_1.default.UpdateRiderWalletBalanceByCardId(cardId, decreaseAmount, increaseAmount);
                            return { status: 0, message: "OK", response: updateBalance };
                        }
                        else {
                            return { status: 1, message: "Card is not yet registered", response: {} };
                        }
                    }
                    return { status: 1, message: "Card does is not yet registered", response: {} };
                }
                else {
                    return { status: 1, message: "Invalid fields", response: {} };
                }
            }
            catch (e) {
                console.log(`Error in rider wallet services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new RiderWalletService();
//# sourceMappingURL=RiderWalletService.js.map