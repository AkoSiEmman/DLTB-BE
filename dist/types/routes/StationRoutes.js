"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const StationController_1 = require("../controllers/StationController");
const StationRouter = (0, express_1.Router)();
StationRouter.get("/station/:id", CheckTokenMiddleware_1.CheckTokenMiddleware, StationController_1.GetAllStationPerCoopIdController);
StationRouter.post("/station", CheckTokenMiddleware_1.CheckTokenMiddleware, StationController_1.AddStationController);
exports.default = StationRouter;
//# sourceMappingURL=StationRoutes.js.map