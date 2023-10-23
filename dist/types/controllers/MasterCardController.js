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
exports.AddNewMasterCardController = exports.GetAllMasterCardController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const MasterCardServices_1 = __importDefault(require("../services/MasterCardServices"));
function GetAllMasterCardController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const masterCards = yield MasterCardServices_1.default.GetAllMasterCard();
            if (masterCards) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: masterCards
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: "1",
                            message: "Failed to get master cards",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
        }
        catch (e) {
            console.error("Error in getting all master card controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting mastercard: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllMasterCardController = GetAllMasterCardController;
function AddNewMasterCardController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newMasterCard = yield MasterCardServices_1.default.CreateNewMasterCard(request.body);
            console.log(newMasterCard);
            if (newMasterCard === true) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: "1",
                            message: newMasterCard,
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
        }
        catch (e) {
            console.error("Error in adding new master card controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting mastercard: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.AddNewMasterCardController = AddNewMasterCardController;
//# sourceMappingURL=MasterCardController.js.map