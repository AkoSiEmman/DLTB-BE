"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const troubleSchema = new mongoose_1.default.Schema({
    UUID: {
        type: String,
        index: true,
        required: true,
        unique: true,
    },
    device_id: {
        type: String,
        index: true,
        require: true,
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
        type: Date,
        index: true,
        default: new Date
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
        default: ""
    },
    inspector_emp_name: {
        type: String,
        index: true,
        default: ""
    },
    onboard_time: {
        type: String,
        index: true,
        default: ""
    },
    onboard_place: {
        type: String,
        index: true,
        default: ""
    },
    onboard_km_post: {
        type: Number,
        index: true,
        default: 0
    },
    trouble_description: {
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
    }
});
const torTroubleSchema = new mongoose_1.default.Schema({
    portalId: {},
    recordId: {
        type: String,
        index: true,
    },
    modId: {
        type: String,
        index: true,
    },
    fieldData: [troubleSchema]
});
const TORTroubleModel = mongoose_1.default.model("TORTroubleRecords", torTroubleSchema);
exports.default = TORTroubleModel;
//# sourceMappingURL=TORTroubleModel.js.map