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
exports.employeeRepo = void 0;
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
class EmployeeRepository {
    GetAllEmployee() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield EmployeeModel_1.default.find({});
                return employees;
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
    UpdateEmployeeById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield EmployeeModel_1.default.findByIdAndUpdate(id, data, { new: true });
            }
            catch (e) {
                console.error("Repository error: ", e);
            }
        });
    }
    AddEmployee(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employeeData = new EmployeeModel_1.default(data);
                const employeeDataSave = yield employeeData.save();
                return true;
            }
            catch (e) {
                console.error("Repository error: ", e);
                return false;
            }
        });
    }
    UpdateEmployeePerEMPNo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield EmployeeModel_1.default.findOneAndReplace({ 'empNo': data.empNo }, data);
            }
            catch (e) {
                console.error("Error in employee repository: " + e);
                return true;
            }
        });
    }
    GetEmployeePerEmpNo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield EmployeeModel_1.default.findOne({ 'empNo': id });
                return employee;
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
    CheckIfEmployeePerNoExist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let ifAllowedToAdd = false;
                const employee = yield EmployeeModel_1.default.findOne({ 'empNo': id });
                if (employee === null) {
                    ifAllowedToAdd = true;
                }
                if (ifAllowedToAdd === true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
    UpdateEmployeePerEmpNo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateEmployeeData = yield EmployeeModel_1.default.findOneAndUpdate({ 'empNo': data.empNo }, data);
                return true;
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
    GetAllPerCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield EmployeeModel_1.default.find({ 'coopId': coopId });
                return employee;
            }
            catch (e) {
                console.error("Repository error: " + e);
                return false;
            }
        });
    }
}
exports.employeeRepo = new EmployeeRepository();
//# sourceMappingURL=EmployeeRepository.js.map