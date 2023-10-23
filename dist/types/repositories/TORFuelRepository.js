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
const TORFuelModel_1 = __importDefault(require("../models/TORFuelModel"));
class TORFuelRepository {
    FindAndReplaceTORFuel(tor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateTORMain = yield TORFuelModel_1.default.findOneAndReplace({ "recordId": tor.recordId }, tor, { upsert: true, new: true });
                return true;
            }
            catch (e) {
                console.error("Error in find and replace repository: " + e);
                return false;
            }
        });
    }
    GetAllTOURFuel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torFuel = yield TORFuelModel_1.default.find({});
                return torFuel;
            }
            catch (e) {
                console.error("Error in get all tor fuel repository: " + e);
                return {};
            }
        });
    }
}
exports.default = new TORFuelRepository();
//# sourceMappingURL=TORFuelRepository.js.map