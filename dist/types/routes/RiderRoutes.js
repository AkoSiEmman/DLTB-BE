"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const RiderController_1 = require("../controllers/RiderController");
const RiderRouter = (0, express_1.Router)();
RiderRouter.get("/rider", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderController_1.GetAllRiderController);
RiderRouter.post("/rider", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderController_1.AddRiderController);
RiderRouter.get("/rider/:id", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderController_1.GetRiderByCardIdController);
exports.default = RiderRouter;
//# sourceMappingURL=RiderRoutes.js.map