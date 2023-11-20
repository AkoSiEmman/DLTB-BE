"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vehicleSchema = new mongoose_1.default.Schema({
    coopId: {
        type: String,
        unique: true,
        default: "655321a339c1307c069616e9",
        required: true
    },
    vehicle_no: {
        type: String,
        unique: true,
        required: true
    },
    plate_no: {
        type: String,
        required: true,
        unique: true
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
const VehicleModel = mongoose_1.default.model("vehiclerecords", vehicleSchema, { collection: "vehiclerecords" }.collection);
exports.default = VehicleModel;
//# sourceMappingURL=VehicleModel.js.map