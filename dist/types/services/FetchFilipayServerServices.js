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
exports.UpdateEmployee = exports.AddNewEmployee = exports.GetAllEmployee = void 0;
const EmployeeRepository_1 = require("../repositories/EmployeeRepository");
function GetAllEmployee() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield EmployeeRepository_1.employeeRepo.GetAllEmployee();
            return employees;
        }
        catch (e) {
            console.error("Error in getting the employees from our own database: " + e);
        }
    });
}
exports.GetAllEmployee = GetAllEmployee;
function AddNewEmployee(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newEmployee = yield EmployeeRepository_1.employeeRepo.AddEmployee(data);
            return true;
        }
        catch (e) {
            console.error("Error in adding new user controller: " + e);
            return false;
        }
    });
}
exports.AddNewEmployee = AddNewEmployee;
function UpdateEmployee(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateEmployee = yield EmployeeRepository_1.employeeRepo.UpdateEmployeeById(id, data);
            return true;
        }
        catch (e) {
            console.error("Error in updating new employee: " + e);
            return false;
        }
    });
}
exports.UpdateEmployee = UpdateEmployee;
//# sourceMappingURL=FetchFilipayServerServices.js.map