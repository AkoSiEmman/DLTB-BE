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
const MasterCardModel_1 = __importDefault(require("../models/MasterCardModel"));
class MasterCardRepository {
    GetAllMasterCard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const masterCard = yield MasterCardModel_1.default.find({});
                return masterCard;
            }
            catch (e) {
                console.error("Error in master card repository: " + e);
                return false;
            }
        });
    }
    GetCardByCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const masterCard = yield MasterCardModel_1.default.find({ "coopId": coopId });
                return masterCard;
            }
            catch (e) {
                console.error("Error in master card repository: " + e);
                return false;
            }
        });
    }
    CreateNewMasterCard(masterCard) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMasterCard = new MasterCardModel_1.default(masterCard);
                const saveMasterCard = yield newMasterCard.save();
                return true;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return e;
            }
        });
    }
    FindCardIdInMasterCard(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchCardId = yield MasterCardModel_1.default.findOne({ "cardId": cardId });
                if (searchCardId) {
                    return searchCardId;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                let errorMessage = e.message;
                return errorMessage;
            }
        });
    }
    GetCurrentBalancePerCardId(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchCardId = yield MasterCardModel_1.default.findOne({ "cardId": cardId });
                if (searchCardId) {
                    return searchCardId.balance;
                }
                else {
                    return null;
                }
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                let errorMessage = e.message;
                return null;
            }
        });
    }
    UpdateMasterCardBalanceByCardId(cardId, decreaseAmount, increaseAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`INCREASE ${increaseAmount}`);
                console.log(`DECREASE ${decreaseAmount}`);
                const increaseBalancePerId = yield MasterCardModel_1.default.updateOne({ "cardId": cardId }, { $inc: { "balance": increaseAmount } }, { new: true });
                const decreaseBalancePerId = yield MasterCardModel_1.default.updateOne({ "cardId": cardId }, { $inc: { "balance": -decreaseAmount } }, { new: true });
                return true;
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                return e;
            }
        });
    }
}
exports.default = new MasterCardRepository();
//# sourceMappingURL=MasterCardRepository.js.map