"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORFuelController_1 = require("../controllers/TORFuelController");
const TORFuelRouter = (0, express_1.Router)();
TORFuelRouter.get('/tor/fuel', CheckTokenMiddleware_1.CheckTokenMiddleware, TORFuelController_1.GetAllTORFuelController);
TORFuelRouter.get('/sync/tor/fuel', CheckTokenMiddleware_1.CheckTokenMiddleware, TORFuelController_1.SyncGetAllTorFuelController);
TORFuelRouter.post('/tor/fuel', CheckTokenMiddleware_1.CheckTokenMiddleware, TORFuelController_1.CreateTORFuelController);
exports.default = TORFuelRouter;
//# sourceMappingURL=TORFuelRoutes.js.map