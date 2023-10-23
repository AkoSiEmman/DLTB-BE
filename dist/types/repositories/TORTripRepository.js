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
const TORTripModel_1 = __importDefault(require("../models/TORTripModel"));
class TORTripRepository {
    GetAllTORTrip() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torTrips = yield TORTripModel_1.default.find({});
                return torTrips;
            }
            catch (e) {
                console.error("Error in generating tor trips repository: " + e);
                return e;
            }
        });
    }
    AddNewTORTrip(fieldData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tor = {
                    "portalId": {},
                    "recordId": "",
                    "modId": "",
                    fieldData
                };
                console.log(tor);
                const newTOR = new TORTripModel_1.default(tor);
                const saveTOR = yield newTOR.save();
                return saveTOR;
            }
            catch (e) {
                console.error("Error in adding new tor trip: " + e);
                return e;
            }
        });
    }
    FindOneAndReplaceTORTrip(torTrip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findTorAndReplace = yield TORTripModel_1.default.findOneAndReplace({ "fieldData.UUID": torTrip.UUID }, torTrip, { upsert: true, new: true });
                return findTorAndReplace;
            }
            catch (e) {
                console.error("Error in finding and replacing tor: " + e);
                return e;
            }
        });
    }
}
exports.default = new TORTripRepository();
//# sourceMappingURL=TORTripRepository.js.map