"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToFilipayDB = exports.connectToMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectToMongoDB(connectionString) {
    console.log('Connecting to database...');
    mongoose_1.default.connect(connectionString);
    const db = mongoose_1.default.connection;
    db.on('error', (error) => {
        console.error(error);
        console.log("Reconnecting to database...");
        setTimeout(connectToMongoDB, 1000);
    });
    db.once('open', () => console.log("Connected to database"));
}
exports.connectToMongoDB = connectToMongoDB;
;
function connectToFilipayDB(connectionString) {
    console.log("Connecting to database...");
    const db = mongoose_1.default.createConnection(connectionString);
    db.on("error", (error) => {
        console.error(error);
        console.log("Reconnecting to database...");
        setTimeout(() => connectToFilipayDB(connectionString), 1000);
    });
    db.once("open", () => console.log("Connected to database"));
    return db;
}
exports.connectToFilipayDB = connectToFilipayDB;
;
//# sourceMappingURL=DbConnection.js.map