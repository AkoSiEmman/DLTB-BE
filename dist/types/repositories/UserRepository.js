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
const UserModel_1 = __importDefault(require("../models/UserModel"));
class UserRepository {
    GetAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserModel_1.default.find({});
                return users;
            }
            catch (e) {
                console.log(`Error in getting vehicles ${e}`);
                return e;
            }
        });
    }
    GetUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserModel_1.default.findOne({ "_id": id });
                return user;
            }
            catch (e) {
                console.log(`Error in getting repository: ${e}`);
                return e;
            }
        });
    }
    AddUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addUser = new UserModel_1.default(newUser);
                return yield addUser.save();
            }
            catch (e) {
                console.log(`Error in getting repository: ${e}`);
                return e;
            }
        });
    }
    CheckIfEmailExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserModel_1.default.findOne({ "email": email });
                return user;
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return e;
            }
        });
    }
    GetUserPasswordByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserModel_1.default.findOne({ "email": email });
                return user;
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return e;
            }
        });
    }
    UpdateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateUser = yield UserModel_1.default.findByIdAndUpdate(id, {
                    $set: user,
                }, {
                    new: true,
                });
                return updateUser;
            }
            catch (e) {
                console.log(`Error in repository: ${e}`);
                return e;
            }
        });
    }
}
exports.default = new UserRepository();
//# sourceMappingURL=UserRepository.js.map