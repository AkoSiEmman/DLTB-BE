"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TORViolationController_1 = require("../controllers/TORViolationController");
const TORViolationRouter = (0, express_1.Router)();
TORViolationRouter.get('/tor/violation', CheckTokenMiddleware_1.CheckTokenMiddleware, TORViolationController_1.GetAllTorViolationController);
TORViolationRouter.post('/tor/violation', CheckTokenMiddleware_1.CheckTokenMiddleware, TORViolationController_1.CreateNewTorViolationController);
exports.default = TORViolationRouter;
//# sourceMappingURL=TORViolationRoutes.js.map