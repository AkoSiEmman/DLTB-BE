"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const deviceSchema = new mongoose_1.default.Schema({
    deviceId: {
        type: String,
        required: true,
        unique: true,
    },
    coopId: {
        type: String,
        required: true,
    },
    deviceName: {
        type: String,
        required: true,
    },
    deviceType: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: new Date(),
        index: true,
    }
});
const DeviceModel = mongoose_1.default.model("DeviceRecords", deviceSchema);
exports.default = DeviceModel;
//# sourceMappingURL=DeviceModel.js.map