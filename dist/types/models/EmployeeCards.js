"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const employeeCardSchema = new mongoose_1.default.Schema({
    coopId: {
        type: String,
        unique: true,
        default: "655321a339c1307c069616e9",
        required: true
    },
    empNo: {
        type: String,
        unique: true,
        required: true,
    },
    cardId: {
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const EmployeeCardModel = mongoose_1.default.model("employeecardrecords", employeeCardSchema, { collection: "employeecardrecords" }.collection);
exports.default = EmployeeCardModel;
//# sourceMappingURL=EmployeeCards.js.map