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
const CooperativeRepository_1 = __importDefault(require("../repositories/CooperativeRepository"));
class CooperativeService {
    GetData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield CooperativeRepository_1.default.GetAllData();
                return { status: 0, message: "OK", response: data };
            }
            catch (e) {
                console.log(`Error in get all service: ${e}`);
                return { status: 0, message: e, response: {} };
            }
        });
    }
    AddData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = yield CooperativeRepository_1.default.AddData(data);
                return { status: 0, message: "OK", response: newData };
            }
            catch (e) {
                console.log(`Error in adding service: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new CooperativeService();
//# sourceMappingURL=CooperativeService.js.map