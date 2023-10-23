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
const DispatchModel_1 = __importDefault(require("../models/DispatchModel"));
class DispatchRepository {
    AddDispatch(newDispatch) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dispatch = new DispatchModel_1.default(newDispatch);
                const saveDispatch = dispatch.save();
                return saveDispatch;
            }
            catch (e) {
                console.log(`Error in add dispatch repository: ${e}`);
                return e;
            }
        });
    }
    GetAllDispatch() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allDispatch = yield DispatchModel_1.default.find({});
                console.log(allDispatch);
                return allDispatch;
            }
            catch (e) {
                console.log(`Error in getting dispatch repository: ${e}`);
                return e;
            }
        });
    }
}
exports.default = new DispatchRepository();
//# sourceMappingURL=DispatchRepository.js.map