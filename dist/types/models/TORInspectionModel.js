"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const inspectionSchema = new mongoose_1.default.Schema({
    UUID: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    device_id: {
        type: String,
        index: true,
        default: "",
        required: true,
    },
    control_no: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    tor_no: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    date_of_trip: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    bus_no: {
        type: String,
        index: true,
        default: ""
    },
    route: {
        type: String,
        index: true,
        default: ""
    },
    route_code: {
        type: String,
        index: true,
        default: ""
    },
    bound: {
        type: String,
        index: true,
        default: "SOUTH"
    },
    trip_no: {
        type: Number,
        index: true,
        default: 0
    },
    inspector_emp_no: {
        type: String,
        index: true,
        default: "0000",
        required: true
    },
    inspector_emp_name: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    onboard_time: {
        type: Date,
        index: true,
        default: "",
        required: true
    },
    onboard_place: {
        type: String,
        index: true,
        default: ""
    },
    onboard_km_post: {
        type: String,
        index: true,
        default: ""
    },
    ticket_no_beginning: {
        type: String,
        index: true,
        default: ""
    },
    ticket_no_ending: {
        type: String,
        index: true,
        default: ""
    },
    passenger_count_paid: {
        type: String,
        index: true,
        default: "",
        required: true
    },
    passenger_count_with_pass: {
        type: String,
        index: true,
        default: ""
    },
    passenger_count_transfer: {
        type: String,
        index: true,
        default: ""
    },
    passenger_count_total: {
        type: Number,
        index: true,
        default: 0
    },
    actual_count: {
        type: Number,
        index: true,
        default: 0
    },
    total_discrepancy: {
        type: Number,
        index: true,
        default: 0
    },
    remarks: {
        type: String,
        index: true,
        default: ""
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
    timestamp: {
        type: Date,
        index: true,
        default: new Date
    }
});
const torInspectionSchema = new mongoose_1.default.Schema({
    portalData: {},
    recordId: {
        type: String,
        index: true,
        default: ""
    },
    modId: {
        type: String,
        index: true
    },
    fieldData: [inspectionSchema]
});
const TORInspectionModel = mongoose_1.default.model("TORInspectionRecords", torInspectionSchema);
exports.default = TORInspectionModel;
//# sourceMappingURL=TORInspectionModel.js.map