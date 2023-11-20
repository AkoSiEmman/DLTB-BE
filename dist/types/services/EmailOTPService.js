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
const moment_1 = __importDefault(require("moment"));
const EmailOTPRepository_1 = require("../repositories/EmailOTPRepository");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const OTP_1 = __importDefault(require("../common/OTP"));
class EmailOTPService {
    GetAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield EmailOTPRepository_1.emailOTPRepository.GetAll();
                return { status: 0, message: "OK", response: data };
            }
            catch (e) {
                console.log(`Error in get all service: ${e}`);
                return { status: 0, message: e, response: {} };
            }
        });
    }
    AddData(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserRepository_1.default.GetUserByEmail(email);
                if ((user === null || user === void 0 ? void 0 : user.email) !== undefined) {
                    const otp = (0, OTP_1.default)();
                    const newOtp = yield EmailOTPRepository_1.emailOTPRepository.AddData(email, otp);
                    return { status: 0, message: "OK", response: {} };
                }
                else {
                    return { status: 1, message: "Email does not exist", response: {} };
                }
            }
            catch (e) {
                console.log(`Error in adding new data: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    ValidateOtp(otp, email) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getOtpData = yield EmailOTPRepository_1.emailOTPRepository.GetDataPerEmail(email);
                if (getOtpData !== null) {
                    if (((_a = getOtpData[0]) === null || _a === void 0 ? void 0 : _a.otpValue) === otp) {
                        const isOtpValid = yield this.CheckOtpValidity((_b = getOtpData[0]) === null || _b === void 0 ? void 0 : _b.dateOfExpiration);
                        if (isOtpValid) {
                            const deleteOtp = yield EmailOTPRepository_1.emailOTPRepository.DeleteDataPerId((_c = getOtpData[0]) === null || _c === void 0 ? void 0 : _c.id);
                            return { status: 0, message: "OK", response: {} };
                        }
                        else {
                            return { status: 1, message: "OTP Already expired", response: {} };
                        }
                    }
                    else {
                        return { status: 1, message: "Invalid OTP", response: {} };
                    }
                }
                else {
                    return { status: 1, message: "Invalid OTP", response: {} };
                }
            }
            catch (e) {
                console.log(`Error in validating otp: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    CheckOtpValidity(otpExpiration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validUntil = yield (0, moment_1.default)(otpExpiration);
                const currentDate = yield (0, moment_1.default)();
                if (validUntil.isAfter(currentDate) || validUntil.isSame(currentDate)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log(`Error in repository ${e}`);
                return false;
            }
        });
    }
}
exports.default = new EmailOTPService();
//# sourceMappingURL=EmailOTPService.js.map