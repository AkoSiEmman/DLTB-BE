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
exports.CheckOTPController = exports.AddEmailController = exports.GetAllEmailOTPController = void 0;
const EmailOTPService_1 = __importDefault(require("../services/EmailOTPService"));
const GetCurrentDate_1 = require("../common/GetCurrentDate");
function GetAllEmailOTPController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield EmailOTPService_1.default.GetAllData();
            if (data.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: data
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: data.status,
                            message: data.message,
                            dateTime: data,
                        }],
                    response: data
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllEmailOTPController = GetAllEmailOTPController;
function AddEmailController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield EmailOTPService_1.default.AddData(request.body.email);
            if (data.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: data.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: data.status,
                            message: data.message,
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: data.response
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
exports.AddEmailController = AddEmailController;
function CheckOTPController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = request.body.email;
            const otp = request.body.otp;
            const data = yield EmailOTPService_1.default.ValidateOtp(otp, email);
            if (data.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: data.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: data.status,
                            message: data.message,
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: data.response
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
exports.CheckOTPController = CheckOTPController;
//# sourceMappingURL=EmailOTPControllert.js.map