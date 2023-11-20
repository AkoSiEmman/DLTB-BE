"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const DeviceController_1 = require("../controllers/DeviceController");
const DeviceRouter = (0, express_1.Router)();
DeviceRouter.post("/device", CheckTokenMiddleware_1.CheckTokenMiddleware, DeviceController_1.AddDeviceController);
DeviceRouter.get("/device/coop/:id", CheckTokenMiddleware_1.CheckTokenMiddleware, DeviceController_1.GetCoopPerDeviceIdController);
exports.default = DeviceRouter;
//# sourceMappingURL=DeviceRoutes.js.map