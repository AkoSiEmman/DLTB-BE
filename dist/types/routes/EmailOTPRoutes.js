"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const EmailOTPControllert_1 = require("../controllers/EmailOTPControllert");
const EmailOTPRouter = (0, express_1.Router)();
EmailOTPRouter.get("/email-otp", CheckTokenMiddleware_1.CheckTokenMiddleware, EmailOTPControllert_1.GetAllEmailOTPController);
EmailOTPRouter.post("/email-otp", CheckTokenMiddleware_1.CheckTokenMiddleware, EmailOTPControllert_1.AddEmailController);
EmailOTPRouter.post("/validate-otp", CheckTokenMiddleware_1.CheckTokenMiddleware, EmailOTPControllert_1.CheckOTPController);
exports.default = EmailOTPRouter;
//# sourceMappingURL=EmailOTPRoutes.js.map