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
exports.directionRepo = void 0;
const DirectionModel_1 = __importDefault(require("../models/DirectionModel"));
class Directions {
    GetAllDirections() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const directions = yield DirectionModel_1.default.find();
                return directions;
            }
            catch (e) {
                console.error("Error in direction repository: " + e);
                return false;
            }
        });
    }
    AddNewDirection(direction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newDirection = new DirectionModel_1.default(direction);
                const saveNewDirection = yield newDirection.save();
                return true;
            }
            catch (e) {
                console.error("Error in direction repository: " + e);
                return false;
            }
        });
    }
}
exports.directionRepo = new Directions();
//# sourceMappingURL=DirectionRepository.js.map