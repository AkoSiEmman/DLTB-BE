"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateOTP() {
    const digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }
    console.log(otp);
    return otp;
}
exports.default = generateOTP;
//# sourceMappingURL=OTP.js.map