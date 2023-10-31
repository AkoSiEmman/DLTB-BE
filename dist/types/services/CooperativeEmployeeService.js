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
const CooperativeEmployeeRepository_1 = __importDefault(require("../repositories/CooperativeEmployeeRepository"));
class CooperativeEmployeeService {
    GetAllCooperativeEmployee() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allCooperativeEmployee = yield CooperativeEmployeeRepository_1.default.GetAllCooperativeEmployee();
                return { status: 0, message: "OK", response: allCooperativeEmployee };
            }
            catch (e) {
                console.log(`Error in getting vehicle services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    AddCooperativeEmployee(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmployee = yield CooperativeEmployeeRepository_1.default.AddCooperativeEmployee(data);
                return { status: 0, message: "OK", response: newEmployee };
            }
            catch (e) {
                console.log(`Error in getting vehicle services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new CooperativeEmployeeService();
//# sourceMappingURL=CooperativeEmployeeService.js.map