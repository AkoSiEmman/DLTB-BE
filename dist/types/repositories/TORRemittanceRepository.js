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
const TORRemittanceModel_1 = __importDefault(require("../models/TORRemittanceModel"));
class TORRemittanceRepository {
    FindOneAndReplaceRemittance(torRemittance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateTor = yield TORRemittanceModel_1.default.findOneAndReplace({ "recordId": torRemittance.recordId }, torRemittance, { upsert: true, new: true });
                return true;
            }
            catch (e) {
                console.error("Error in find and replace repository: " + e);
                return false;
            }
        });
    }
    GetAllTORRemittance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torRemittance = yield TORRemittanceModel_1.default.find({});
                return torRemittance;
            }
            catch (e) {
                console.error("Error in get all tor remittance repository: " + e);
                return false;
            }
        });
    }
}
exports.default = new TORRemittanceRepository();
//# sourceMappingURL=TORRemittanceRepository.js.map