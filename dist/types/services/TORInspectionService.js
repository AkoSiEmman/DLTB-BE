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
const TORInspectionRepository_1 = __importDefault(require("../repositories/TORInspectionRepository"));
class TORInspectionService {
    GetAllTORInspection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allTORInspection = yield TORInspectionRepository_1.default.GetAllTORInspection();
                return { status: 0, message: "OK", response: allTORInspection };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    CreateTORInspection(torInspection) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveNewTorInspection = yield TORInspectionRepository_1.default.CreateTORInspection(torInspection);
                return { status: 0, message: "OK", response: saveNewTorInspection };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new TORInspectionService();
//# sourceMappingURL=TORInspectionService.js.map