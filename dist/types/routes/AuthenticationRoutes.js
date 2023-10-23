"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthenticationController_1 = require("../controllers/AuthenticationController");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post('/auth', AuthenticationController_1.AuthenticationController);
exports.default = AuthRouter;
//# sourceMappingURL=AuthenticationRoutes.js.map