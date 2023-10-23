"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORTroubleController_1 = require("../controllers/TORTroubleController");
const TORTroubleRouter = (0, express_1.Router)();
TORTroubleRouter.get('/tor/trouble', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTroubleController_1.GetAllTorTroubleController);
TORTroubleRouter.post('/tor/trouble', CheckTokenMiddleware_1.CheckTokenMiddleware, TORTroubleController_1.CreateNewTorTroubleController);
exports.default = TORTroubleRouter;
//# sourceMappingURL=TORTroubleRoutes.js.map