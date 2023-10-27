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
const RiderRepository_1 = __importDefault(require("../repositories/RiderRepository"));
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
    isMasterCard(card) {
        return card.balance !== undefined;
    }
    isRiderCard(card) {
        return card.balance !== undefined;
    }
    UpdateRiderWalletByCardId(cardId, decreaseAmount, increaseAmount, cardType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (cardId !== undefined && decreaseAmount !== null && increaseAmount !== null && cardType !== undefined) {
                    if (cardType === "mastercard") {
                        const findCardIdInMasterCard = yield MasterCardRepository_1.default.FindCardIdInMasterCard(cardId);
                        if (this.isMasterCard(findCardIdInMasterCard) && findCardIdInMasterCard.balance >= 0) {
                            if (this.isMasterCard(findCardIdInMasterCard) && findCardIdInMasterCard.balance >= decreaseAmount) {
                                const updateBalance = yield MasterCardRepository_1.default.UpdateMasterCardBalanceByCardId(cardId, decreaseAmount, increaseAmount);
                                return { status: 0, message: "OK", response: updateBalance };
                            }
                            else {
                                return { status: 1, message: "Insufficient balance", response: {} };
                            }
                        }
                        else {
                            return { status: 1, message: "Card is not yet registered", response: {} };
                        }
                    }
                    if (cardType === "discounted" || cardType === "regular") {
                        const riderIdPerCardId = yield RiderRepository_1.default.GetRiderByCardId(cardId);
                        if (riderIdPerCardId[0]._id !== undefined) {
                            let riderId = riderIdPerCardId[0]._id.toString();
                            console.log("rider id ito : " + riderId);
                            if (cardType === "discounted" && riderIdPerCardId[0].sNo.substring(0, 3).toUpperCase() !== "SND") {
                                return { status: 1, message: "Card does is not valid", response: {} };
                            }
                            if (cardType === "regular" && riderIdPerCardId[0].sNo.substring(0, 3).toUpperCase() !== "SNR") {
                                return { status: 1, message: "Card does is not valid", response: {} };
                            }
                            const updateBalancePerRiderId = yield RiderWalletRepository_1.default.UpdateRiderWalletByRiderId(riderId, decreaseAmount, increaseAmount);
                            return { status: 0, message: `Rider ${riderId} balance has been updated`, response: {} };
                        }
                        else {
                            console.log("PUMASOK DITO");
                            return { status: 1, message: "Card is not valid", response: {} };
                        }
                    }
                    return { status: 1, message: "Card does is not valid", response: {} };
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
    GetRiderWalletCardIdPerId(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const FindCardInRiderWallet = yield RiderWalletRepository_1.default.FindCardInRiderWallet(cardId);
                if (this.isRiderCard(FindCardInRiderWallet)) {
                    return { status: 0, message: "OK", response: FindCardInRiderWallet };
                }
                else {
                    return { status: 1, message: "Card does not exist", response: {} };
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