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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDirectionPerCoopIdController = exports.AddNewDirectionController = exports.GetAllDirectionsController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const DirectionRepository_1 = require("../repositories/DirectionRepository");
function GetAllDirectionsController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const directions = yield DirectionRepository_1.directionRepo.GetAllDirections();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: directions
            });
        }
        catch (e) {
            console.error("Error in controller");
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting all directions: " + e,
                        dateTime: responseDate,
                    }] });
        }
    });
}
exports.GetAllDirectionsController = GetAllDirectionsController;
function AddNewDirectionController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newDirection = DirectionRepository_1.directionRepo.AddNewDirection(request.body);
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
        catch (e) {
            console.error("Error in controller");
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting all directions: " + e,
                        dateTime: responseDate,
                    }] });
        }
    });
}
exports.AddNewDirectionController = AddNewDirectionController;
function GetAllDirectionPerCoopIdController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const directions = yield DirectionRepository_1.directionRepo.GetAllPerCoopId(request.params.id);
            console.log(directions);
            if (Object(directions).length === 0) {
                response.status(200).json({ messages: [{
                            code: "1",
                            message: "Invalid Coop Id",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: {}
                });
            }
            else {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: directions
                });
            }
        }
        catch (e) {
            console.error("Error in controller");
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting all directions: " + e,
                        dateTime: responseDate,
                    }] });
        }
    });
}
exports.GetAllDirectionPerCoopIdController = GetAllDirectionPerCoopIdController;
//# sourceMappingURL=DirectionController.js.map