"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const VehicleController_1 = require("../controllers/VehicleController");
const VehicleRouter = (0, express_1.Router)();
VehicleRouter.get("/vehicle/:id", CheckTokenMiddleware_1.CheckTokenMiddleware, VehicleController_1.GetAllVehiclePerCoopIdController);
VehicleRouter.post("/vehicle", CheckTokenMiddleware_1.CheckTokenMiddleware, VehicleController_1.AddVehicleController);
exports.default = VehicleRouter;
//# sourceMappingURL=VehicleRoutes.js.map