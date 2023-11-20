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
exports.emailOTPRepository = void 0;
const EmailOTPModel_1 = __importDefault(require("../models/EmailOTPModel"));
class EmailOTPRepository {
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield EmailOTPModel_1.default.find({});
                return data;
            }
            catch (e) {
                console.error(`Error in repository : ${e}`);
            }
        });
    }
    AddData(email, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = new EmailOTPModel_1.default({ "email": email, "otpValue": otp });
                return yield newData.save();
            }
            catch (e) {
                console.error(`Error in repository ${e}`);
                return e;
            }
        });
    }
    GetDataPerEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield EmailOTPModel_1.default.find({ "email": email });
                return data;
            }
            catch (e) {
                console.error(`Error in repository ${e}`);
                return null;
            }
        });
    }
    DeleteDataPerId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield EmailOTPModel_1.default.findByIdAndDelete(id);
                return data;
            }
            catch (e) {
                console.error(`Error in repository ${e}`);
                return null;
            }
        });
    }
}
exports.emailOTPRepository = new EmailOTPRepository();
//# sourceMappingURL=EmailOTPRepository.js.map