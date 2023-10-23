"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const DirectionController_1 = require("../controllers/DirectionController");
const DirectionRouter = (0, express_1.Router)();
DirectionRouter.get("/directions", CheckTokenMiddleware_1.CheckTokenMiddleware, DirectionController_1.GetAllDirectionsController);
DirectionRouter.post("/directions", CheckTokenMiddleware_1.CheckTokenMiddleware, DirectionController_1.AddNewDirectionController);
exports.default = DirectionRouter;
//# sourceMappingURL=DirectionRoutes.js.map