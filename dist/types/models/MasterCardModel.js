"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const masterSchema = new mongoose_1.default.Schema({
    cardId: {
        type: String,
        unique: true,
        required: true,
    },
    balance: {
        type: Number,
        default: 0.00,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: new Date,
        required: true,
    }
});
const masterCardModel = mongoose_1.default.model("MasterCardRecords", masterSchema);
exports.default = masterCardModel;
//# sourceMappingURL=MasterCardModel.js.map