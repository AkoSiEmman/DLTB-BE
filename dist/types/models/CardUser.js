"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cardUserSchema = new mongoose_1.default.Schema({
    cardId: {
        type: String,
        index: true,
        required: false,
    },
    username: {
        type: String,
        index: true,
        required: false,
    },
    password: {
        type: String,
        index: true,
        required: false,
    },
    recordId: {
        type: String,
        index: true,
        required: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});
const CardUserModel = mongoose_1.default.model('CardUserRecords', cardUserSchema);
exports.default = CardUserModel;
//# sourceMappingURL=CardUser.js.map