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
exports.GetAllEmployeesFromOtherServer = void 0;
const axios_1 = __importDefault(require("axios"));
const EmployeeRepository_1 = require("../repositories/EmployeeRepository");
function GetAllEmployeesFromOtherServer(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const bodyParameters = {
                "query": [{ "designation": "*" }],
                "sort": [{ "fieldName": "lastName", "sortOrder": "ascend" }],
                "limit": "10000"
            };
            const requestGetEmployeeFromOtherServer = yield axios_1.default.post("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/layouts/dltb_id/_find", bodyParameters, config);
            requestGetEmployeeFromOtherServer.data.response.data.map((employee) => __awaiter(this, void 0, void 0, function* () {
                const AllowedToAddTheUser = yield EmployeeRepository_1.employeeRepo.CheckIfEmployeePerNoExist(employee.fieldData.empNo);
                if (AllowedToAddTheUser) {
                    const AddUser = yield EmployeeRepository_1.employeeRepo.AddEmployee(employee);
                }
                else {
                    const UpdateUser = yield EmployeeRepository_1.employeeRepo.UpdateEmployeePerEmpNo(employee);
                }
            }));
            return requestGetEmployeeFromOtherServer.data.response.data;
        }
        catch (e) {
            console.error("Error in getting all employees from other server services : " + e);
            return { error: e };
        }
    });
}
exports.GetAllEmployeesFromOtherServer = GetAllEmployeesFromOtherServer;
//# sourceMappingURL=OtherServerFetchEmployeeService.js.map