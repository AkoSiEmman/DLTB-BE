"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthorizationTokenController_1 = require("../controllers/AuthorizationTokenController");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const AuthTokenRouter = (0, express_1.Router)();
AuthTokenRouter.get('/token', AuthorizationTokenController_1.GenerateAuthorizationTokenConroller);
AuthTokenRouter.delete('/token', CheckTokenMiddleware_1.CheckTokenMiddleware, AuthorizationTokenController_1.DeleteAuthorizationTokenController);
exports.default = AuthTokenRouter;
//# sourceMappingURL=AuthorizationTokenRoute.js.map