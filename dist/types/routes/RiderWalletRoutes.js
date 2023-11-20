"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const RiderWalletController_1 = require("../controllers/RiderWalletController");
const RiderWalletRouter = (0, express_1.Router)();
RiderWalletRouter.get("/riderwallet", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderWalletController_1.GetAllRiderWalletController);
RiderWalletRouter.post("/riderwallet", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderWalletController_1.AddRiderWalletController);
RiderWalletRouter.put("/riderwallet", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderWalletController_1.UpdateRiderWalletBalanceController);
RiderWalletRouter.get("/riderwallet/balance/:cardId/:cardType", CheckTokenMiddleware_1.CheckTokenMiddleware, RiderWalletController_1.GetRiderWalletBalanceController);
exports.default = RiderWalletRouter;
//# sourceMappingURL=RiderWalletRoutes.js.map