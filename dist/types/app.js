"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv').config();
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const EmployeeRoutes_1 = __importDefault(require("./routes/EmployeeRoutes"));
const AuthenticationRoutes_1 = __importDefault(require("./routes/AuthenticationRoutes"));
const CardUserRoutes_1 = __importDefault(require("./routes/CardUserRoutes"));
const AuthorizationTokenRoute_1 = __importDefault(require("./routes/AuthorizationTokenRoute"));
const TORMainRoutes_1 = __importDefault(require("./routes/TORMainRoutes"));
const DirectionRoutes_1 = __importDefault(require("./routes/DirectionRoutes"));
const TORTicketRoutes_1 = __importDefault(require("./routes/TORTicketRoutes"));
const TORFuelRoutes_1 = __importDefault(require("./routes/TORFuelRoutes"));
const TORRemittanceRoutes_1 = __importDefault(require("./routes/TORRemittanceRoutes"));
const MasterCardRoutes_1 = __importDefault(require("./routes/MasterCardRoutes"));
const TORTripRoutes_1 = __importDefault(require("./routes/TORTripRoutes"));
const TORInspectionRoutes_1 = __importDefault(require("./routes/TORInspectionRoutes"));
const TORViolationRoutes_1 = __importDefault(require("./routes/TORViolationRoutes"));
const TORTroubleRoutes_1 = __importDefault(require("./routes/TORTroubleRoutes"));
const EmployeeCardRoutes_1 = __importDefault(require("./routes/EmployeeCardRoutes"));
const DbConnection_1 = require("./databases/DbConnection");
const VehicleRoutes_1 = __importDefault(require("./routes/VehicleRoutes"));
const DispatchRoutes_1 = __importDefault(require("./routes/DispatchRoutes"));
const RiderWalletRoutes_1 = __importDefault(require("./routes/RiderWalletRoutes"));
const RiderRoutes_1 = __importDefault(require("./routes/RiderRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    preflightContinue: true,
}));
const urlBackend = '/api/v1/filipay';
app.use(urlBackend, EmployeeRoutes_1.default);
app.use(urlBackend, AuthenticationRoutes_1.default);
app.use(urlBackend, CardUserRoutes_1.default);
app.use(urlBackend, AuthorizationTokenRoute_1.default);
app.use(urlBackend, DirectionRoutes_1.default);
app.use(urlBackend, MasterCardRoutes_1.default);
app.use(urlBackend, EmployeeCardRoutes_1.default);
app.use(urlBackend, TORMainRoutes_1.default);
app.use(urlBackend, TORTicketRoutes_1.default);
app.use(urlBackend, TORTripRoutes_1.default);
app.use(urlBackend, TORFuelRoutes_1.default);
app.use(urlBackend, TORRemittanceRoutes_1.default);
app.use(urlBackend, TORInspectionRoutes_1.default);
app.use(urlBackend, TORViolationRoutes_1.default);
app.use(urlBackend, TORTroubleRoutes_1.default);
app.use(urlBackend, VehicleRoutes_1.default);
app.use(urlBackend, DispatchRoutes_1.default);
app.use(urlBackend, RiderWalletRoutes_1.default);
app.use(urlBackend, RiderRoutes_1.default);
const url = process.env.DB_CONNECTION_STRING ? process.env.DB_CONNECTION_STRING : '';
const filipayUrl = process.env.DB_FILIPAY_CONNECTION_STRING ? process.env.DB_FILIPAY_CONNECTION_STRING : '';
(0, DbConnection_1.connectToMongoDB)(url);
console.log(url);
console.log(filipayUrl);
app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}/`);
});
//# sourceMappingURL=app.js.map