"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORTicketController_1 = require("../controllers/TORTicketController");
const TORTicketRouter = (0, express_1.Router)();
TORTicketRouter.get('/tor/ticket', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTicketController_1.GetAllTicketController);
TORTicketRouter.post('/tor/ticket', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTicketController_1.CreateTorTicketController);
TORTicketRouter.get('/sync/tor/ticket', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTicketController_1.SyncTORTicketController);
exports.default = TORTicketRouter;
//# sourceMappingURL=TORTicketRoutes.js.map