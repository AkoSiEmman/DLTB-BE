"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORTripController_1 = require("../controllers/TORTripController");
const TORTripRouter = (0, express_1.Router)();
TORTripRouter.get('/tor/trip', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTripController_1.GetAllTORTripController);
TORTripRouter.post('/tor/trip', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTripController_1.CreateTORTripController);
exports.default = TORTripRouter;
//# sourceMappingURL=TORTripRoutes.js.map