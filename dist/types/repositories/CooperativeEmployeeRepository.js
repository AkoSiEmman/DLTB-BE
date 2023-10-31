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
const CooperativeEmployeeModel_1 = __importDefault(require("../models/CooperativeEmployeeModel"));
class CooperativeEmployeeRepository {
    GetAllCooperativeEmployee() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield CooperativeEmployeeModel_1.default.find({});
                return result;
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return e;
            }
        });
    }
    AddCooperativeEmployee(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = new CooperativeEmployeeModel_1.default(data);
                return yield employee.save();
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return e;
            }
        });
    }
}
exports.default = new CooperativeEmployeeRepository();
//# sourceMappingURL=CooperativeEmployeeRepository.js.map