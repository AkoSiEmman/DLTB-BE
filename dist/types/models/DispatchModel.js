"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dispatchModel = new mongoose_1.default.Schema({
    coopName: {
        type: String,
        index: true,
        required: true
    },
    designation: {
        type: String,
        index: true,
        required: true
    },
    torNo: {
        type: String,
        index: true,
        required: true
    },
    otNo: {
        type: String,
        index: true,
        required: true
    },
    atm: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        index: true,
        default: new Date
    },
    tripNo: {
        type: String,
        index: true,
        required: true
    },
    bound: {
        type: String,
        index: true,
        required: true
    },
    route: {
        type: String,
        index: true,
        required: true
    },
    driverName: {
        type: String,
        index: true,
        required: true
    },
    conductorName: {
        type: String,
        index: true,
        required: true
    },
    dispatcherName: {
        type: String,
        index: true,
        required: true
    },
    trip: {
        type: String,
        index: true,
        required: true
    },
});
const DispatchModel = mongoose_1.default.model('DispatchRecords', dispatchModel);
exports.default = DispatchModel;
//# sourceMappingURL=DispatchModel.js.map