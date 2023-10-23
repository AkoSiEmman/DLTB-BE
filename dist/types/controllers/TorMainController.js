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
exports.SyncTorMainController = exports.CreateNewTORMAINController = exports.GetAllTORMainController = exports.SearchForTORMAINController = exports.PatchTORMAINController = void 0;
const GetCurrentDate_1 = require("../common/GetCurrentDate");
const TORMainService_1 = __importDefault(require("../services/TORMainService"));
function PatchTORMAINController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const recordId = request.params.id;
            const updateTORMain = yield TORMainService_1.default.UpdateTORMainServiceToOtherServer(request.body, recordId);
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
        catch (e) {
            console.error("Error in tor main controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting employees: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.PatchTORMAINController = PatchTORMAINController;
function SearchForTORMAINController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const requestTorMain = yield TORMainService_1.default.SearchTORMainService(request.body.UUID);
            response.status(200).json({ message: "success", torMain: requestTorMain });
        }
        catch (e) {
        }
    });
}
exports.SearchForTORMAINController = SearchForTORMAINController;
function GetAllTORMainController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const torMains = yield TORMainService_1.default.GetAllTORMainFromServer();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: torMains
            });
        }
        catch (e) {
            console.error("Error in tor main controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in getting employees: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.GetAllTORMainController = GetAllTORMainController;
function CreateNewTORMAINController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            console.log(request.body);
            const newTorMain = yield TORMainService_1.default.CreateTORMainService(request.body);
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: []
            });
        }
        catch (e) {
            console.error("Error in Create new tor main controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in adding employees: " + e,
                        dateTime: responseDate,
                    }],
                response: [{}]
            });
        }
    });
}
exports.CreateNewTORMAINController = CreateNewTORMAINController;
function SyncTorMainController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            const syncTorMain = yield TORMainService_1.default.SyncTORMainService();
            response.status(200).json({ messages: [{
                        code: "0",
                        message: "OK",
                        dateTime: responseDate,
                    }],
                response: syncTorMain
            });
        }
        catch (e) {
            console.error("Error in tor main controller: " + e);
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Error in adding employees: " + e,
                        dateTime: responseDate,
                    }],
                response: [{}]
            });
        }
    });
}
exports.SyncTorMainController = SyncTorMainController;
//# sourceMappingURL=TorMainController.js.map