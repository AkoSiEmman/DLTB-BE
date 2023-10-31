"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    profileImageUrl: {
        type: String,
        index: true,
        default: "https://res.cloudinary.com/doachm6y7/image/upload/v1698295253/conlkfzanf4ycze4ya3x.jpg"
    },
    firstName: {
        type: String,
        index: true,
        required: true
    },
    middleName: {
        type: String,
        index: true,
        default: ""
    },
    lastName: {
        type: String,
        index: true,
        required: true
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    isEmailVerified: {
        type: Boolean,
        index: true,
        default: false,
    },
    isAllowedToTorMain: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorTicket: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorFuel: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorRemittance: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorTrip: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorInspection: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorViolation: {
        type: Boolean,
        index: true,
        default: true,
    },
    isAllowedToTorTrouble: {
        type: Boolean,
        index: true,
        default: true,
    },
    role: {
        type: String,
        index: true,
        required: true
    },
    password: {
        type: String,
        index: true,
        required: true
    },
    createdAt: {
        type: Date,
        index: true,
        default: new Date
    },
    updatedAt: {
        type: Date,
        index: true,
        default: new Date
    }
});
const UserModel = mongoose_1.default.model("userecords", userSchema, { collection: "userecords" }.collection);
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map