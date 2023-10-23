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
const EmployeeCards_1 = __importDefault(require("../models/EmployeeCards"));
class EmployeeCardRepository {
    GetAllEmployeeCard() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employeeCards = yield EmployeeCards_1.default.find({});
                return employeeCards;
            }
            catch (e) {
                console.error("Error in employee repository: " + e);
                return e;
            }
        });
    }
    RegisterEmployeeCard(employeeCard) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmployeeCard = new EmployeeCards_1.default(employeeCard);
                const saveNewEmployeeCard = yield newEmployeeCard.save();
                return saveNewEmployeeCard;
            }
            catch (e) {
                console.error("Error in employee repository: " + e);
                return e;
            }
        });
    }
}
exports.default = new EmployeeCardRepository();
//# sourceMappingURL=EmployeeCardRepository.js.map