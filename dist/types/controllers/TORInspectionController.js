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
exports.CreateTORInspectionController = exports.GetAllTORInspectionController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORInspectionService_1 = __importDefault(require("../services/TORInspectionService"));
function GetAllTORInspectionController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const torInspections = yield TORInspectionService_1.default.GetAllTORInspection();
            if (torInspections.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: torInspections.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: torInspections.status,
                            message: torInspections.message,
                            dateTime: responseDate,
                        }],
                    response: torInspections.response
                });
            }
        }
        catch (e) {
            console.error("Error in inspection controller: " + e);
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
exports.GetAllTORInspectionController = GetAllTORInspectionController;
function CreateTORInspectionController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const newTORInspection = yield TORInspectionService_1.default.CreateTORInspection(request.body);
            if (newTORInspection.status === 0) {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "OK",
                            dateTime: responseDate,
                        }],
                    response: newTORInspection.response
                });
            }
            else {
                response.status(201).json({ messages: [{
                            code: newTORInspection.status,
                            message: newTORInspection.message,
                            dateTime: responseDate,
                        }],
                    response: newTORInspection.response
                });
            }
        }
        catch (e) {
            console.error("Error in inspection controller: " + e);
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
exports.CreateTORInspectionController = CreateTORInspectionController;
//# sourceMappingURL=TORInspectionController.js.map