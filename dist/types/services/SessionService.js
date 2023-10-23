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
exports.TOREndSessionService = exports.TORGenerateSessionService = exports.EmployeeEndSessionService = exports.EmployeeGenerateSessionService = void 0;
const axios_1 = __importDefault(require("axios"));
function EmployeeGenerateSessionService() {
    return __awaiter(this, void 0, void 0, function* () {
        let usernameCred = "filipay";
        let passwordCred = "";
        if (process.env.PASSWORD) {
            passwordCred = process.env.PASSWORD;
        }
        console.log("Username credentials " + usernameCred);
        console.log("Password credential " + passwordCred);
        try {
            const generateSession = yield axios_1.default.post("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/sessions", {}, {
                auth: {
                    username: usernameCred,
                    password: passwordCred,
                }
            });
            const token = yield generateSession.data.response.token;
            return token;
        }
        catch (e) {
            console.error("Error in generating session token " + e);
            return false;
        }
    });
}
exports.EmployeeGenerateSessionService = EmployeeGenerateSessionService;
function EmployeeEndSessionService(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const endSession = yield axios_1.default.delete("https://fms.dltbbus.com.ph/fmi/data/v1/databases/dltb%20company%20database/sessions/" + token);
            const response = yield endSession.data;
            if (response.messages.code === "0") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.error("Error in Employee end session service " + e);
            return false;
        }
    });
}
exports.EmployeeEndSessionService = EmployeeEndSessionService;
function TORGenerateSessionService() {
    return __awaiter(this, void 0, void 0, function* () {
        let usernameCred = "filipay";
        let passwordCred = "";
        if (process.env.PASSWORD) {
            passwordCred = process.env.PASSWORD;
        }
        console.log("Username credentials " + usernameCred);
        console.log("Password credential " + passwordCred);
        try {
            const generateSession = yield axios_1.default.post("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/", {}, {
                auth: {
                    username: usernameCred,
                    password: passwordCred,
                }
            });
            const token = yield generateSession.data.response.token;
            return token;
        }
        catch (e) {
            console.error("Error in generating session token " + e);
            return false;
        }
    });
}
exports.TORGenerateSessionService = TORGenerateSessionService;
function TOREndSessionService(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const endSession = yield axios_1.default.delete("https://s037817.fmphost.com/fmi/data/v1/databases/filipay_torData/sessions/" + token);
            const response = yield endSession.data;
            if (response.messages.code === "0") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.error("Error in destroying the session " + e);
            return false;
        }
    });
}
exports.TOREndSessionService = TOREndSessionService;
//# sourceMappingURL=SessionService.js.map