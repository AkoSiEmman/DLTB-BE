"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DbConnection_1 = require("../databases/DbConnection");
const filipayUrl = process.env.DB_FILIPAY_CONNECTION_STRING ? process.env.DB_FILIPAY_CONNECTION_STRING : '';
const riderWalletSchema = new mongoose_1.default.Schema({
    riderId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Rider',
        required: true,
        index: true
    },
    currencyId: {
        type: String,
        required: true,
        index: true
    },
    address: {
        type: String,
        required: true,
        index: true
    },
    privateKey: {
        type: String,
        required: true,
        index: true
    },
    balance: {
        type: Number,
        required: true,
        index: true
    }
});
const RiderWalletModel = (0, DbConnection_1.connectToFilipayDB)(filipayUrl).model("riderwallet", riderWalletSchema, { collection: "riderwallet" }.collection);
exports.default = RiderWalletModel;
//# sourceMappingURL=RiderWalletModel.js.map