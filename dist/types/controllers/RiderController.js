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
exports.AddRiderController = exports.GetAllRiderController = exports.GetRiderByCardIdController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const RiderServices_1 = __importDefault(require("../services/RiderServices"));
function GetRiderByCardIdController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const rider = yield RiderServices_1.default.GetRiderByCardId(request.params.id);
            if (rider.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: rider.message,
                            dateTime: responseDate,
                        }],
                    response: rider.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: rider.status,
                            message: rider.message,
                            dateTime: responseDate,
                        }],
                    response: rider.response
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
exports.GetRiderByCardIdController = GetRiderByCardIdController;
function GetAllRiderController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const riders = yield RiderServices_1.default.GetAllRider();
            if (riders.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: riders.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: riders.status,
                            message: riders.message,
                            dateTime: responseDate,
                        }],
                    response: riders.response
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
exports.GetAllRiderController = GetAllRiderController;
function AddRiderController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newRider = yield RiderServices_1.default.AddRiderWallet(request.body);
            if (newRider.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newRider.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newRider.status,
                            message: newRider.message,
                            dateTime: responseDate,
                        }],
                    response: newRider.response
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
exports.AddRiderController = AddRiderController;
//# sourceMappingURL=RiderController.js.map