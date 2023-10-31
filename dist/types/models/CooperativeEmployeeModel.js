"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cooperativeEmployeeSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
        index: true
    },
    middleName: {
        type: String,
        default: "",
        index: true
    },
    lastName: {
        type: String,
        required: true,
        index: true
    },
    position: {
        type: String,
        required: true,
        index: true
    },
    companyName: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    }
});
const CooperativeEmployeeModel = mongoose_1.default.model("cooperativeemployeerecords", cooperativeEmployeeSchema, { collection: "cooperativeemployeerecords" }.collection);
exports.default = CooperativeEmployeeModel;
//# sourceMappingURL=CooperativeEmployeeModel.js.map