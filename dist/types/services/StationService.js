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
const mongodb_1 = require("mongodb");
const StationRepository_1 = __importDefault(require("../repositories/StationRepository"));
class StationService {
    GetAllStation() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stations = yield StationRepository_1.default.GetAllStation();
                return { status: 0, message: "OK", response: stations };
            }
            catch (e) {
                console.log(`Error in station services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    AddStation(newStation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addNewStation = Object.assign(Object.assign({}, newStation), { routeId: new mongodb_1.ObjectId(newStation.routeId) });
                const addStation = yield StationRepository_1.default.AddStation(newStation);
                return { status: 0, message: "OK", response: addStation };
            }
            catch (e) {
                console.log(`Error in station services: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new StationService();
//# sourceMappingURL=StationService.js.map