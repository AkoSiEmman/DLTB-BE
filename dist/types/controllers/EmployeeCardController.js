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
exports.GetAllEmployeeCardController = exports.CreateNewEmployeeCardController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const EmployeeCardService_1 = __importDefault(require("../services/EmployeeCardService"));
function CreateNewEmployeeCardController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newEmployeeCard = yield EmployeeCardService_1.default.RegisterNewEmployeeCard(request.body);
            if (newEmployeeCard.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newEmployeeCard.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newEmployeeCard.status,
                            message: newEmployeeCard.message,
                            dateTime: responseDate,
                        }],
                    response: newEmployeeCard.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.CreateNewEmployeeCardController = CreateNewEmployeeCardController;
function GetAllEmployeeCardController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const employeeCards = yield EmployeeCardService_1.default.GetAllEmployeeCard();
            if (employeeCards.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: employeeCards.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: employeeCards.status,
                            message: employeeCards.message,
                            dateTime: responseDate,
                        }],
                    response: employeeCards.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllEmployeeCardController = GetAllEmployeeCardController;
//# sourceMappingURL=EmployeeCardController.js.map