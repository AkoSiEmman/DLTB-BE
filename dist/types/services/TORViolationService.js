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
const TORViolationRepository_1 = __importDefault(require("../repositories/TORViolationRepository"));
class TORViolationService {
    GetAllTOR() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allTOR = yield TORViolationRepository_1.default.GetAllTorViolation();
                return { status: 0, message: "OK", response: allTOR };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    CreateTOR(tor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveNewTor = yield TORViolationRepository_1.default.CreateTORViolation(tor);
                return { status: 0, message: "OK", response: saveNewTor };
            }
            catch (e) {
                console.error("Error in tor services: " + e);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new TORViolationService();
//# sourceMappingURL=TORViolationService.js.map