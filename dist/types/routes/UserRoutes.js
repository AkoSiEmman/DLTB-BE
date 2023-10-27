"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const UserController_1 = require("../controllers/UserController");
const UserRouter = (0, express_1.Router)();
UserRouter.get("/user", CheckTokenMiddleware_1.CheckTokenMiddleware, UserController_1.GetAllUserController);
UserRouter.get("/user/:id", CheckTokenMiddleware_1.CheckTokenMiddleware, UserController_1.GetUserByIdController);
UserRouter.post("/user", CheckTokenMiddleware_1.CheckTokenMiddleware, UserController_1.AddUserContorller);
exports.default = UserRouter;
//# sourceMappingURL=UserRoutes.js.map