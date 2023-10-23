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
const RiderWalletModel_1 = __importDefault(require("../models/RiderWalletModel"));
class RiderWalletRepository {
    GetAllRiderWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const riderWallets = yield RiderWalletModel_1.default.find({});
                console.log(riderWallets);
                return riderWallets;
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                return e;
            }
        });
    }
    AddRiderWallet(riderWallet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRiderWallet = new RiderWalletModel_1.default(riderWallet);
                const saveNewRiderWallet = yield newRiderWallet.save();
                return saveNewRiderWallet;
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                return e;
            }
        });
    }
    UpdateRiderWalletBalanceByCardId(cardId, decreaseAmount, increaseAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const increaseBalancePerId = yield RiderWalletModel_1.default.updateOne({ "currencyId": cardId }, { $inc: { "balance": increaseAmount } }, { new: true });
                const decreaseBalancePerId = yield RiderWalletModel_1.default.updateOne({ "currencyId": cardId }, { $inc: { "balance": -decreaseAmount } }, { new: true });
                return decreaseBalancePerId;
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                return e;
            }
        });
    }
    FindCardInRiderWallet(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchCardId = yield RiderWalletModel_1.default.find({ "currencyId": cardId });
                let isCardIdExist = false;
                if (searchCardId.length > 0) {
                    isCardIdExist = true;
                }
                return isCardIdExist;
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                return e;
            }
        });
    }
}
exports.default = new RiderWalletRepository();
//# sourceMappingURL=RiderWalletRepository.js.map