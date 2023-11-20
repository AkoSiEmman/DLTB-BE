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
const VehicleModel_1 = __importDefault(require("../models/VehicleModel"));
class VehicleRepository {
    GetAllVehicles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicles = yield VehicleModel_1.default.find({});
                return vehicles;
            }
            catch (e) {
                console.log(`Error in getting vehicles ${e}`);
                return e;
            }
        });
    }
    GetAllDataPerCoopId(coopId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicles = yield VehicleModel_1.default.find({ "coopId": coopId });
                return vehicles;
            }
            catch (e) {
                console.log(`Error in getting vehicles ${e}`);
                return e;
            }
        });
    }
    AddVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newVehicle = new VehicleModel_1.default(vehicle);
                const saveVehicle = yield newVehicle.save();
                return saveVehicle;
            }
            catch (e) {
                console.log(`Error in adding vehicle ${e}`);
                return e;
            }
        });
    }
}
exports.default = new VehicleRepository();
//# sourceMappingURL=VehicleRepository.js.map