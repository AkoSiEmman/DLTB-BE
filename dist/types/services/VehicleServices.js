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
const VehicleRepository_1 = __importDefault(require("../repositories/VehicleRepository"));
class VehicleServices {
    GetAllVehicle() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allVehicles = yield VehicleRepository_1.default.GetAllVehicles();
                return { status: 0, message: "OK", response: allVehicles };
            }
            catch (e) {
                console.log(`Error in getting vehicle services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetAllVehiclePerCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allVehicles = yield VehicleRepository_1.default.GetAllDataPerCoopId(coopId);
                if (Object(allVehicles).length > 0) {
                    return { status: 0, message: "OK", response: allVehicles };
                }
                else {
                    return { status: 1, message: "Invalid Coop Id", response: {} };
                }
            }
            catch (e) {
                console.log(`Error in getting vehicle services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    AddVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saveVehicle = yield VehicleRepository_1.default.AddVehicle(vehicle);
                return { status: 0, message: "OK", response: saveVehicle };
            }
            catch (e) {
                console.log(`Error in adding vehicle: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new VehicleServices();
//# sourceMappingURL=VehicleServices.js.map