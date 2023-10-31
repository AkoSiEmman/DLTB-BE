"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adminPageSchema = new mongoose_1.default.Schema({
    pageName: {
        type: String,
        required: true,
        index: true
    },
    pageUrl: {
        type: String,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});
const AdminPageModel = mongoose_1.default.model("adminpagerecords", adminPageSchema, { collection: "adminpagerecords" }.collection);
exports.default = AdminPageModel;
//# sourceMappingURL=AdminPageModel.js.map