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
const TORTripRepository_1 = __importDefault(require("../repositories/TORTripRepository"));
class TORTripServices {
    AddNewTORTrip(tor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(tor);
                const newTORTrip = yield TORTripRepository_1.default.AddNewTORTrip(tor);
                return { status: 0, message: "OK", response: newTORTrip };
            }
            catch (e) {
                console.error("Error in trip services: " + e);
                return { status: 500, message: e };
            }
        });
    }
    GetAllTORTrip() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allTorTrip = yield TORTripRepository_1.default.GetAllTORTrip();
                return { status: 0, message: "OK", response: allTorTrip };
            }
            catch (e) {
                console.error("Error in trip services: " + e);
                return { status: 500, message: e };
            }
        });
    }
}
exports.default = new TORTripServices();
//# sourceMappingURL=TORTripServices.js.map