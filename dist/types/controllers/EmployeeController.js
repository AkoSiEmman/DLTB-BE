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
exports.UpdateEmployeeFilipayServerController = exports.AddNewEmployeeFilipayServerController = exports.GetAllEmployeesFilipayServerController = exports.GetAllEmployeesController = void 0;
const SessionService_1 = require("../services/SessionService");
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const OtherServerFetchEmployeeService_1 = require("../services/OtherServerFetchEmployeeService");
const FetchFilipayServerServices_1 = require("../services/FetchFilipayServerServices");
let employeeToken = false;
function GetAllEmployeesController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const requestForToken = yield (0, SessionService_1.EmployeeGenerateSessionService)();
            employeeToken = requestForToken;
            const responseGetEmployeeFromOtherServer = yield (0, OtherServerFetchEmployeeService_1.GetAllEmployeesFromOtherServer)(employeeToken);
            if (employeeToken !== false) {
                const requestEndToken = yield (0, SessionService_1.EmployeeEndSessionService)(employeeToken);
            }
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: [responseGetEmployeeFromOtherServer]
            });
        }
        catch (e) {
            console.error(e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting employees: " + e,
                        dateTime: responseDate,
                    }],
                response: [{}]
            });
        }
    });
}
exports.GetAllEmployeesController = GetAllEmployeesController;
function GetAllEmployeesFilipayServerController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const currentDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
            const requestForEmployeeList = yield (0, FetchFilipayServerServices_1.GetAllEmployee)();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: [requestForEmployeeList]
            });
        }
        catch (e) {
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting all employees: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllEmployeesFilipayServerController = GetAllEmployeesFilipayServerController;
function AddNewEmployeeFilipayServerController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newEmployee = yield (0, FetchFilipayServerServices_1.AddNewEmployee)(request.body);
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
        catch (e) {
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in generating token: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.AddNewEmployeeFilipayServerController = AddNewEmployeeFilipayServerController;
function UpdateEmployeeFilipayServerController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            console.log(JSON.stringify(request.body));
            const updateEmployee = yield (0, FetchFilipayServerServices_1.UpdateEmployee)(request.body._id, request.body);
            if (updateEmployee === false) {
                response.status(201).json({ messages: [{
                            code: "212",
                            message: "Modifying employee failed!",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
            response.status(500).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
        catch (e) {
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in modifying employee information: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.UpdateEmployeeFilipayServerController = UpdateEmployeeFilipayServerController;
//# sourceMappingURL=EmployeeController.js.map