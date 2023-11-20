"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const emailOtpSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    otpValue: {
        type: String,
        required: true,
        index: true
    },
    dateOfExpiration: {
        type: Date,
        default: () => Date.now() + 10800000,
        index: true
    }
});
const EmailOTPModel = mongoose_1.default.model("emailotprecords", emailOtpSchema, { collection: "emailotprecords" }.collection);
exports.default = EmailOTPModel;
//# sourceMappingURL=EmailOTPModel.js.map