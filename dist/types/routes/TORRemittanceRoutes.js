"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORRemittanceController_1 = require("../controllers/TORRemittanceController");
const TORRemittanceRouter = (0, express_1.Router)();
TORRemittanceRouter.get('/sync/tor/remittance', CheckTokenMiddleware_1.CheckTokenMiddleware, TORRemittanceController_1.SyncGetAllTORRemittanceController);
TORRemittanceRouter.get('/tor/remittance', CheckTokenMiddleware_1.CheckTokenMiddleware, TORRemittanceController_1.GetAllRemittanceController);
TORRemittanceRouter.post('/tor/remittance', CheckTokenMiddleware_1.CheckTokenMiddleware, TORRemittanceController_1.CreateTORRemittanceController);
exports.default = TORRemittanceRouter;
//# sourceMappingURL=TORRemittanceRoutes.js.map