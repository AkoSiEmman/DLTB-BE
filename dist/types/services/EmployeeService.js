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
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeRepository_1 = require("../repositories/EmployeeRepository");
class EmployeeService {
    AddData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = yield EmployeeRepository_1.employeeRepo.AddEmployee(data);
                return { status: 0, message: "OK", response: newData };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetDataPerCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield EmployeeRepository_1.employeeRepo.GetAllPerCoopId(coopId);
                return { status: 0, message: "OK", response: data };
            }
            catch (e) {
                console.error("Error in services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new EmployeeService();
//# sourceMappingURL=EmployeeService.js.map