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
const DeviceModel_1 = __importDefault(require("../models/DeviceModel"));
class DeviceRepository {
    GetAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = DeviceModel_1.default.find({});
                return data;
            }
            catch (e) {
                console.error("Error in direction repository: " + e);
                return false;
            }
        });
    }
    AddData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = new DeviceModel_1.default(data);
                return yield newData.save();
            }
            catch (e) {
                console.error("Error in direction repository: " + e);
                return false;
            }
        });
    }
    GetCoopIdPerDeviceId(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findCoopId = yield DeviceModel_1.default.findOne({ "deviceId": deviceId });
                return findCoopId;
            }
            catch (e) {
                console.error(`Error in repository ${e}`);
                return "";
            }
        });
    }
}
exports.default = new DeviceRepository();
//# sourceMappingURL=DeviceRepository.js.map