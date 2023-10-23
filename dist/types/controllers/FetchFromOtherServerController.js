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
const SessionService_1 = require("../services/SessionService");
let employeeToken = false;
function GetAllEmployeesFromOtherServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const requestForToken = yield (0, SessionService_1.EmployeeGenerateSessionService)();
            employeeToken = requestForToken;
            const getEmployeeFromOtherServer = axios_1.default.post("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/layouts/dltb_id/_find");
            if (employeeToken !== false) {
                const requestEndToken = yield (0, SessionService_1.EmployeeEndSessionService)(employeeToken);
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.GetAllEmployeesFromOtherServer = GetAllEmployeesFromOtherServer;
//# sourceMappingURL=FetchFromOtherServerController.js.map