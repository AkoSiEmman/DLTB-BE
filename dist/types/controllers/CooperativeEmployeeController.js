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
exports.GetAllCooperativeEmployeeController = exports.AddCooperativeEmployeeController = void 0;
const CooperativeEmployeeService_1 = __importDefault(require("../services/CooperativeEmployeeService"));
const GetCurrentDate_1 = require("../common/GetCurrentDate");
function AddCooperativeEmployeeController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newEmployee = yield CooperativeEmployeeService_1.default.AddCooperativeEmployee(request.body);
            if (newEmployee.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: newEmployee.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newEmployee.status,
                            message: newEmployee.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: newEmployee.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.AddCooperativeEmployeeController = AddCooperativeEmployeeController;
function GetAllCooperativeEmployeeController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allCooperativeEmployee = yield CooperativeEmployeeService_1.default.GetAllCooperativeEmployee();
            if (allCooperativeEmployee.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDate)(),
                        }],
                    response: allCooperativeEmployee.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: allCooperativeEmployee.status,
                            message: allCooperativeEmployee.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: allCooperativeEmployee.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllCooperativeEmployeeController = GetAllCooperativeEmployeeController;
//# sourceMappingURL=CooperativeEmployeeController.js.map