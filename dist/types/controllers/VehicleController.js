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
exports.AddVehicleController = exports.GetAllVehiclePerCoopIdController = exports.GetAllVehicleController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const VehicleServices_1 = __importDefault(require("../services/VehicleServices"));
function GetAllVehicleController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDate)();
        try {
            const vehicles = yield VehicleServices_1.default.GetAllVehicle();
            if (vehicles.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: vehicles.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: vehicles.status,
                            message: vehicles.message,
                            dateTime: responseDate,
                        }],
                    response: vehicles.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllVehicleController = GetAllVehicleController;
function GetAllVehiclePerCoopIdController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDate)();
        try {
            const vehicles = yield VehicleServices_1.default.GetAllVehiclePerCoopId(request.params.id);
            response.status(201).json({ messages: [{
                        code: vehicles.status,
                        message: vehicles.message,
                        dateTime: responseDate,
                    }],
                response: vehicles.response
            });
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllVehiclePerCoopIdController = GetAllVehiclePerCoopIdController;
function AddVehicleController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newVehicle = yield VehicleServices_1.default.AddVehicle(request.body);
            if (newVehicle.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newVehicle.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newVehicle.status,
                            message: newVehicle.message,
                            dateTime: responseDate,
                        }],
                    response: newVehicle.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.AddVehicleController = AddVehicleController;
//# sourceMappingURL=VehicleController.js.map