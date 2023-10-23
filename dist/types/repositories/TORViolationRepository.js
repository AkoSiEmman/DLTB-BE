"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TORViolationModel_1 = __importDefault(require("../models/TORViolationModel"));
class TORViolationRepository {
    GetAllTorViolation() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torInspection = yield TORViolationModel_1.default.find({});
                return torInspection;
            }
            catch (e) {
                console.error("Error in tor violation repository: " + e);
                return e;
            }
        });
    }
    CreateTORViolation(fieldData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tor = {
                    "portalId": {},
                    "recordId": "",
                    "modId": "",
                    fieldData
                };
                const newTor = new TORViolationModel_1.default(tor);
                const saveTor = yield newTor.save();
                return saveTor;
            }
            catch (e) {
                console.error("Error in tor violation repository: " + e);
                return e;
            }
        });
    }
}
exports.default = new TORViolationRepository();
//# sourceMappingURL=TORViolationRepository.js.map