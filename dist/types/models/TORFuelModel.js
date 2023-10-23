"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const torFuel = new mongoose_1.default.Schema({
    UUID: {
        type: String,
        index: true,
        unique: true
    },
    device_id: {
        type: String,
        index: true,
        required: true,
    },
    control_no: {
        type: String,
        index: true,
        required: true
    },
    date_of_trip: {
        type: Date,
        index: true,
        default: new Date
    },
    bus_no: {
        type: String,
        index: true,
        required: true
    },
    route: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    route_code: {
        type: String,
        index: true,
        required: true
    },
    bound: {
        type: String,
        index: true,
        default: "SOUTH",
        required: true
    },
    trip_no: {
        type: Number,
        index: true,
        default: 0
    },
    refuel_date: {
        type: Date,
        index: true,
        default: ""
    },
    refuel_time: {
        type: String,
        index: true,
        default: ""
    },
    fuel_station: {
        type: String,
        index: true,
        default: ""
    },
    fuel_liters: {
        type: Number,
        index: true,
        default: 0
    },
    fuel_amount: {
        type: Number,
        index: true,
        default: 0
    },
    fuel_price_per_liter: {
        type: Number,
        index: true,
        default: 0
    },
    fuel_attendant_id: {
        type: Number,
        index: true,
        default: 0
    },
    fuel_attendant: {
        type: String,
        index: true,
        default: ""
    },
    full_tank: {
        type: String,
        index: true,
        default: ""
    },
    timestamp: {
        type: Date,
        index: true,
        default: new Date
    },
    lat: {
        type: String,
        index: true,
        default: ""
    },
    long: {
        type: String,
        index: true,
        default: ""
    },
    remarks: {
        type: String,
        index: true,
        default: ""
    }
});
const torFuelSchema = new mongoose_1.default.Schema({
    portalData: {},
    recordId: {
        type: String,
        index: true,
        unique: true,
        required: true,
        default: ""
    },
    modId: {
        type: String,
        index: true,
        required: true
    },
    fieldData: [torFuel]
});
const TORFuelModel = mongoose_1.default.model('TORFuelRecords', torFuelSchema);
exports.default = TORFuelModel;
//# sourceMappingURL=TORFuelModel.js.map