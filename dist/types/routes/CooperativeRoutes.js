"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const CooperativeController_1 = require("../controllers/CooperativeController");
const CooperativeRouter = (0, express_1.Router)();
CooperativeRouter.get("/cooperative", CheckTokenMiddleware_1.CheckTokenMiddleware, CooperativeController_1.GetAllCooperativeController);
CooperativeRouter.post("/cooperative", CheckTokenMiddleware_1.CheckTokenMiddleware, CooperativeController_1.AddCooperativeController);
exports.default = CooperativeRouter;
//# sourceMappingURL=CooperativeRoutes.js.map