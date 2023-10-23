"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DbConnection_1 = require("../databases/DbConnection");
const filipayUrl = process.env.DB_FILIPAY_CONNECTION_STRING ? process.env.DB_FILIPAY_CONNECTION_STRING : '';
const riderSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    emailStatus: {
        type: String,
        required: true,
        index: true,
    },
    cardId: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: new Date,
    },
    updatedAt: {
        type: Date,
        default: new Date,
    },
    sNo: {
        type: String,
        required: true,
        index: true
    }
});
const RiderModel = (0, DbConnection_1.connectToFilipayDB)(filipayUrl).model("rider", riderSchema, { collection: "rider" }.collection);
exports.default = RiderModel;
//# sourceMappingURL=RiderModel.js.map