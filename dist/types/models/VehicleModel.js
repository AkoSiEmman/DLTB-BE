"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vehicleSchema = new mongoose_1.default.Schema({
    bus_no: {
        type: String,
        unique: true,
        required: true
    },
    plate_no: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date
    },
    updatedAt: {
        type: Date,
        default: new Date
    }
});
const VehicleModel = mongoose_1.default.model("VehicleRecords", vehicleSchema);
exports.default = VehicleModel;
//# sourceMappingURL=VehicleModel.js.map