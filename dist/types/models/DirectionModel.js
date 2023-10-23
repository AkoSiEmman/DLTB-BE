"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const directionSchema = new mongoose_1.default.Schema({
    bound: {
        type: String,
        index: true,
        required: true
    },
    origin: {
        type: String,
        index: true,
        required: true
    },
    destination: {
        type: String,
        index: true,
        required: true
    },
    route_code: {
        type: String,
        index: true,
        required: true
    },
    createdAt: {
        type: Date,
        index: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        index: true,
        default: Date.now()
    },
});
const DirectionModel = mongoose_1.default.model('DirectionRecords', directionSchema);
exports.default = DirectionModel;
//# sourceMappingURL=DirectionModel.js.map