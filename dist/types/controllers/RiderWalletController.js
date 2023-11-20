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
exports.UpdateRiderWalletBalanceController = exports.GetRiderWalletBalanceController = exports.AddRiderWalletController = exports.GetRiderWalletPerIdController = exports.GetAllRiderWalletController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const RiderWalletService_1 = __importDefault(require("../services/RiderWalletService"));
function GetAllRiderWalletController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const riderWallets = yield RiderWalletService_1.default.GetAllRiderWallet();
            if (riderWallets.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: riderWallets.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: riderWallets.status,
                            message: riderWallets.message,
                            dateTime: responseDate,
                        }],
                    response: riderWallets.response
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
exports.GetAllRiderWalletController = GetAllRiderWalletController;
function GetRiderWalletPerIdController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const riderWallet = yield RiderWalletService_1.default.GetRiderWalletCardIdPerId(request.params.cardId);
            if (riderWallet.status === 500) {
                response.status(500).json({ messages: [{
                            code: riderWallet.status,
                            message: riderWallet.message,
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: riderWallet.response
                });
            }
            else {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: GetCurrentDate_1.GetCurrentDateSTR,
                        }],
                    response: riderWallet.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.GetRiderWalletPerIdController = GetRiderWalletPerIdController;
function AddRiderWalletController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newRiderWallet = yield RiderWalletService_1.default.AddRiderWallet(request.body);
            if (newRiderWallet.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newRiderWallet.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newRiderWallet.status,
                            message: newRiderWallet.message,
                            dateTime: responseDate,
                        }],
                    response: newRiderWallet.response
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
exports.AddRiderWalletController = AddRiderWalletController;
function GetRiderWalletBalanceController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const riderWalletBalance = yield RiderWalletService_1.default.GetBalancePerCardId(request.params.cardId, request.params.cardType);
            if ((riderWalletBalance === null || riderWalletBalance === void 0 ? void 0 : riderWalletBalance.status) === 0) {
                response.status(200).json({ messages: [{
                            code: riderWalletBalance.status,
                            message: riderWalletBalance.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: riderWalletBalance.response
                });
            }
            if ((riderWalletBalance === null || riderWalletBalance === void 0 ? void 0 : riderWalletBalance.status) === 1) {
                response.status(201).json({ messages: [{
                            code: riderWalletBalance.status,
                            message: riderWalletBalance.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: riderWalletBalance.response
                });
            }
            if ((riderWalletBalance === null || riderWalletBalance === void 0 ? void 0 : riderWalletBalance.status) === 500) {
                response.status(500).json({ messages: [{
                            code: "500",
                            message: "INTERNAL SERVER ERROR",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: riderWalletBalance.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.GetRiderWalletBalanceController = GetRiderWalletBalanceController;
function UpdateRiderWalletBalanceController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const increaseAmountValue = request.body.increaseAmount ? request.body.increaseAmount : 0;
        const decreaseAmountValue = request.body.decreaseAmount ? request.body.decreaseAmount : 0;
        try {
            const updateRiderWallet = yield RiderWalletService_1.default.UpdateRiderWalletByCardId(request.body.cardId, decreaseAmountValue, increaseAmountValue, request.body.cardType);
            if ((updateRiderWallet === null || updateRiderWallet === void 0 ? void 0 : updateRiderWallet.status) === 0) {
                response.status(200).json({ messages: [{
                            code: updateRiderWallet.status,
                            message: updateRiderWallet.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: updateRiderWallet.response
                });
            }
            if ((updateRiderWallet === null || updateRiderWallet === void 0 ? void 0 : updateRiderWallet.status) === 1) {
                response.status(201).json({ messages: [{
                            code: updateRiderWallet.status,
                            message: updateRiderWallet.message,
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: updateRiderWallet.response
                });
            }
            if ((updateRiderWallet === null || updateRiderWallet === void 0 ? void 0 : updateRiderWallet.status) === 500) {
                response.status(500).json({ messages: [{
                            code: "500",
                            message: "INTERNAL SERVER ERROR",
                            dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                        }],
                    response: updateRiderWallet.response
                });
            }
        }
        catch (e) {
            console.error("Error in controller: " + e);
            response.status(500).json({ messages: [{
                        code: "1",
                        message: "" + e,
                        dateTime: (0, GetCurrentDate_1.GetCurrentDateSTR)(),
                    }],
                response: {}
            });
        }
    });
}
exports.UpdateRiderWalletBalanceController = UpdateRiderWalletBalanceController;
//# sourceMappingURL=RiderWalletController.js.map