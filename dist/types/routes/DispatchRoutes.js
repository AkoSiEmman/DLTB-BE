"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const DispatchController_1 = require("../controllers/DispatchController");
const DispatchRouter = (0, express_1.Router)();
DispatchRouter.get("/dispatch", CheckTokenMiddleware_1.CheckTokenMiddleware, DispatchController_1.GetAllDispatch);
DispatchRouter.post("/dispatch", CheckTokenMiddleware_1.CheckTokenMiddleware, DispatchController_1.AddDispatchController);
exports.default = DispatchRouter;
//# sourceMappingURL=DispatchRoutes.js.map