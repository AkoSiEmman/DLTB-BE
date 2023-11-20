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
const EmployeeCardRepository_1 = __importDefault(require("../repositories/EmployeeCardRepository"));
class EmployeeCardService {
    GetAllEmployeeCard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allEmployeeCard = yield EmployeeCardRepository_1.default.GetAllEmployeeCard();
                return { status: 0, message: "OK", response: allEmployeeCard };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    RegisterNewEmployeeCard(newEmployeeCard) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveNewEmployeeCard = yield EmployeeCardRepository_1.default.RegisterEmployeeCard(newEmployeeCard);
                return { status: 0, message: "OK", response: saveNewEmployeeCard };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetAllCardPerCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield EmployeeCardRepository_1.default.GetAllDatPerCoopId(coopId);
                if (Object(data).length > 0) {
                    return { status: 0, message: "OK", response: data };
                }
                else {
                    return { status: 1, message: "Invalid Coop Id", response: {} };
                }
            }
            catch (e) {
                console.log(`Error in getting services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new EmployeeCardService();
//# sourceMappingURL=EmployeeCardService.js.map