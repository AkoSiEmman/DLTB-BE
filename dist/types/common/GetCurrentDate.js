"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentDate = exports.GetCurrentDateSTR = void 0;
const moment_1 = __importDefault(require("moment"));
function GetCurrentDateSTR() {
    try {
        const DateNow = (0, moment_1.default)();
        return DateNow.format('ddd MMM-DD-YYYY, hh:mm A');
    }
    catch (e) {
        return "Error in getting the current date: " + e;
    }
}
exports.GetCurrentDateSTR = GetCurrentDateSTR;
function GetCurrentDate() {
    try {
        return (0, moment_1.default)();
    }
    catch (e) {
        console.error("Error in generating current date: " + e);
        return e;
    }
}
exports.GetCurrentDate = GetCurrentDate;
//# sourceMappingURL=GetCurrentDate.js.map