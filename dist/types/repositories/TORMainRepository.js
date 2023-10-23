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
const TORMainModel_1 = __importDefault(require("../models/TORMainModel"));
class TORMainRepository {
    GetAllTORMain() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torMain = yield TORMainModel_1.default.find({});
                return torMain;
            }
            catch (e) {
                console.error("Error in tor main repository: " + e);
                return {};
            }
        });
    }
    CreateNewTORMain(newTor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTormain = new TORMainModel_1.default(newTor);
                const SaveNewTorMain = newTormain.save();
                return true;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
    SearchTORMainPerUUID(UUID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findTorMain = yield TORMainModel_1.default.find({ "fieldData.UUID": UUID });
                console.log(findTorMain);
                return findTorMain;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return {};
            }
        });
    }
    UpdateTORMainPerUUID(tor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateTORMain = yield TORMainModel_1.default.findOneAndReplace({ "UUID": tor.fieldData.UUID }, tor.fieldData);
                return true;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
}
exports.default = new TORMainRepository();
//# sourceMappingURL=TORMainRepository.js.map