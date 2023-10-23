"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authorizationTokenSchema = new mongoose_1.default.Schema({
    token: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});
const AuthorizationTokenModel = mongoose_1.default.model('AuthorizationTokenRecords', authorizationTokenSchema);
exports.default = AuthorizationTokenModel;
//# sourceMappingURL=AuthorizationTokenModel.js.map