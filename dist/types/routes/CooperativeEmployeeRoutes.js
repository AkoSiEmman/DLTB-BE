"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const CooperativeEmployeeController_1 = require("../controllers/CooperativeEmployeeController");
const CooperativeEmployeeRouter = (0, express_1.Router)();
CooperativeEmployeeRouter.get("/coop-employee", CheckTokenMiddleware_1.CheckTokenMiddleware, CooperativeEmployeeController_1.GetAllCooperativeEmployeeController);
CooperativeEmployeeRouter.post("/coop-employee", CheckTokenMiddleware_1.CheckTokenMiddleware, CooperativeEmployeeController_1.AddCooperativeEmployeeController);
exports.default = CooperativeEmployeeRouter;
//# sourceMappingURL=CooperativeEmployeeRoutes.js.map