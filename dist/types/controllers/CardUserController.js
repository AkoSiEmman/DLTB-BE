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
exports.CreateNewCardUserController = void 0;
const CardUserService_1 = __importDefault(require("../services/CardUserService"));
const GetCurrentDate_1 = require("../common/GetCurrentDate");
function CreateNewCardUserController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const responseDate = (0, GetCurrentDate_1.GetCurrentDateSTR)();
        try {
            console.log(request.body);
            const addUser = yield CardUserService_1.default.AddCardUserService(request.body);
            console.log(addUser);
            if (addUser === false) {
                response.status(201).json({ message: "Creating new card user failed!" });
                response.status(201).json({ messages: [{
                            code: "212",
                            message: "Creating new card user failed!",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
            else {
                response.status(200).json({ messages: [{
                            code: "0",
                            message: "Successfully created a new card!",
                            dateTime: responseDate,
                        }],
                    response: {}
                });
            }
        }
        catch (e) {
            response.status(500).json({ messages: [{
                        code: "212",
                        message: "Creating new card failed! error: " + e,
                        dateTime: responseDate,
                    }],
                response: {}
            });
        }
    });
}
exports.CreateNewCardUserController = CreateNewCardUserController;
//# sourceMappingURL=CardUserController.js.map