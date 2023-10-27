"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthenticationController_1 = require("../controllers/AuthenticationController");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post('/auth', AuthenticationController_1.AuthenticationController);
AuthRouter.get('/auth/:email', CheckTokenMiddleware_1.CheckTokenMiddleware, AuthenticationController_1.GetUserByEmailController);
exports.default = AuthRouter;
//# sourceMappingURL=AuthenticationRoutes.js.map