"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stationSchema = new mongoose_1.default.Schema({
    coopId: {
        type: String,
        index: true,
        default: "655321a339c1307c069616e9"
    },
    stationName: {
        type: String,
        required: true,
        index: true
    },
    km: {
        type: Number,
        required: true,
        index: true
    },
    viceVersaKM: {
        type: Number,
        required: true,
        index: true
    },
    routeId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: new Date,
        index: true
    },
    updatedAt: {
        type: Date,
        default: new Date,
        index: true
    }
});
const StationModel = mongoose_1.default.model("stationrecords", stationSchema, { collection: "stationrecords" }.collection);
exports.default = StationModel;
//# sourceMappingURL=StationModel.js.map