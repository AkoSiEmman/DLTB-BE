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
const DispatchRepository_1 = __importDefault(require("../repositories/DispatchRepository"));
class DispatchService {
    GetAllDispatch() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dispatches = yield DispatchRepository_1.default.GetAllDispatch();
                return { status: 0, message: "OK", response: dispatches };
            }
            catch (e) {
                console.log(`Error in get all dispatch service: ${e}`);
                return { status: 0, message: e, response: {} };
            }
        });
    }
    AddDispatch(newDispatch) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dispatch = yield DispatchRepository_1.default.AddDispatch(newDispatch);
                return { status: 0, message: "OK", response: dispatch };
            }
            catch (e) {
                console.log(`Errro in adding new dispatch: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new DispatchService();
//# sourceMappingURL=DispatchServices.js.map