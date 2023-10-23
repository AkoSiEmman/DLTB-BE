"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeeController_1 = require("../controllers/EmployeeController");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const EmployeeRouter = (0, express_1.Router)();
EmployeeRouter.get('/sync/employee', CheckTokenMiddleware_1.CheckTokenMiddleware, EmployeeController_1.GetAllEmployeesController);
EmployeeRouter.get('/employee', CheckTokenMiddleware_1.CheckTokenMiddleware, EmployeeController_1.GetAllEmployeesFilipayServerController);
exports.default = EmployeeRouter;
//# sourceMappingURL=EmployeeRoutes.js.map