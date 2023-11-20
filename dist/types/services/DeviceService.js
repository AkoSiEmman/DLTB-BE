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
const DeviceRepository_1 = __importDefault(require("../repositories/DeviceRepository"));
class DeviceService {
    GetData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield DeviceRepository_1.default.GetAllData();
                return { status: 0, message: "OK", response: data };
            }
            catch (e) {
                console.log(`Error in get all dispatch service: ${e}`);
                return { status: 0, message: e, response: {} };
            }
        });
    }
    AddData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = yield DeviceRepository_1.default.AddData(data);
                return { status: 0, message: "OK", response: newData };
            }
            catch (e) {
                console.log(`Error in adding vehicle: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetDataPerCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield DeviceRepository_1.default.GetCoopIdPerDeviceId(coopId);
                if (data !== null && data !== "") {
                    let dataId = data === null || data === void 0 ? void 0 : data.coopId;
                    const coops = yield CooperativeRepository_1.default.GetDataPerId(dataId);
                    return { status: 0, message: "OK", response: coops };
                }
                else {
                    return { status: 1, message: "Invalid device id", response: {} };
                }
            }
            catch (e) {
                console.log(`Error in adding vehicle: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new DeviceService();
//# sourceMappingURL=DeviceService.js.map