"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CardUserController_1 = require("../controllers/CardUserController");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const CardUserRouter = (0, express_1.Router)();
CardUserRouter.post('/carduser', CheckTokenMiddleware_1.CheckTokenMiddleware, CardUserController_1.CreateNewCardUserController);
exports.default = CardUserRouter;
//# sourceMappingURL=CardUserRoutes.js.map