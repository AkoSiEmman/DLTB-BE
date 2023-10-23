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
const TORTicketModel_1 = __importDefault(require("../models/TORTicketModel"));
class TORTicketRepository {
    GetAllTORTicket() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const torTickets = yield TORTicketModel_1.default.find({});
                return torTickets;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
    CreateTORTicket(torTicket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTorTicket = new TORTicketModel_1.default(torTicket);
                const saveTorTicket = yield newTorTicket.save();
                return true;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
    FindOneAndReplaceTORTicket(tor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateTORMain = yield TORTicketModel_1.default.findOneAndReplace({ "fieldData.UUID": tor.fieldData.UUID }, tor, { upsert: true, new: true });
                return true;
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
    FindUUID(UUID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findTorTicket = yield TORTicketModel_1.default.findOne({ "fieldData.UUID": UUID });
                console.log(findTorTicket);
            }
            catch (e) {
                console.error("Error in repository: " + e);
                return false;
            }
        });
    }
}
exports.default = new TORTicketRepository();
//# sourceMappingURL=TORTicketRepository.js.map