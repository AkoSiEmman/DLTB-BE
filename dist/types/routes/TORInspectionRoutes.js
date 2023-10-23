"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORInspectionController_1 = require("../controllers/TORInspectionController");
const TORInspectionRouter = (0, express_1.Router)();
TORInspectionRouter.get('/tor/inspection', CheckTokenMiddleware_1.CheckTokenMiddleware, TORInspectionController_1.GetAllTORInspectionController);
TORInspectionRouter.post('/tor/inspection', CheckTokenMiddleware_1.CheckTokenMiddleware, TORInspectionController_1.CreateTORInspectionController);
exports.default = TORInspectionRouter;
//# sourceMappingURL=TORInspectionRoutes.js.map