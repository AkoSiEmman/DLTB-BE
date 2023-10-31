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
const Bcrypt_1 = require("../common/Bcrypt");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
class UserService {
    GetAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserRepository_1.default.GetAllUser();
                return { status: 0, message: "OK", response: users };
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserRepository_1.default.GetUserById(id);
                return { status: 0, message: "OK", response: user };
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    GetUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserRepository_1.default.GetUserPasswordByEmail(email);
                console.log(email);
                return { status: 0, message: "OK", response: user };
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    AddUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = yield (0, Bcrypt_1.GenerateHashPassword)(user.password);
                const userAccount = Object.assign(Object.assign({}, user), { "password": hashedPassword });
                const saveUser = yield UserRepository_1.default.AddUser(userAccount);
                return { status: 0, message: "OK", response: saveUser };
            }
            catch (e) {
                console.log(`Error in adding vehicle: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
    UpdateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateUser = yield UserRepository_1.default.UpdateUser(id, user);
                return { status: 0, message: "OK", response: updateUser };
            }
            catch (e) {
                console.log(`Error in updating vehicle: ${e}`);
                return { status: 500, message: e, response: {} };
            }
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map