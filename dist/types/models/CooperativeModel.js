"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cooperativeSchema = new mongoose_1.default.Schema({
    cooperativeName: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    cooperativeCodeName: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
        index: true
    }
});
const CooperativeModel = mongoose_1.default.model("cooperativesrecords", cooperativeSchema, { collection: "cooperativesrecords" }.collection);
exports.default = CooperativeModel;
//# sourceMappingURL=CooperativeModel.js.map