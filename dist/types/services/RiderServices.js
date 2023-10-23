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
const RiderRepository_1 = __importDefault(require("../repositories/RiderRepository"));
class RiderServices {
    GetRiderByCardId(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rider = yield RiderRepository_1.default.GetRiderByCardId(cardId);
                if (rider.length > 0) {
                    return { status: 0, message: "OK", response: rider };
                }
                else {
                    return { status: 0, message: "NOT FOUND", response: rider };
                }
            }
            catch (e) {
                console.log(`Error in rider wallet services : ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetAllRider() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const riders = yield RiderRepository_1.default.GetAllRider();
                return { status: 0, message: "OK", response: riders };
            }
            catch (e) {
                console.log(`Error in rider wallet services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    AddRiderWallet(rider) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRider = yield RiderRepository_1.default.AddRider(rider);
                return { status: 0, message: "OK", response: newRider };
            }
            catch (e) {
                console.log(`Error in rider wallet services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new RiderServices();
//# sourceMappingURL=RiderServices.js.map