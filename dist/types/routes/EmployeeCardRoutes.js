"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const EmployeeCardController_1 = require("../controllers/EmployeeCardController");
const EmployeeCardRouter = (0, express_1.Router)();
EmployeeCardRouter.get("/employeecard/:id", CheckTokenMiddleware_1.CheckTokenMiddleware, EmployeeCardController_1.GetAllEmployeeCardPerCoopId);
EmployeeCardRouter.post("/employeecard", CheckTokenMiddleware_1.CheckTokenMiddleware, EmployeeCardController_1.CreateNewEmployeeCardController);
exports.default = EmployeeCardRouter;
//# sourceMappingURL=EmployeeCardRoutes.js.map