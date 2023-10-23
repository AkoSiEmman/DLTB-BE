"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const MasterCardController_1 = require("../controllers/MasterCardController");
const MasterCardRouter = (0, express_1.Router)();
MasterCardRouter.get('/mastercard', CheckTokenMiddleware_1.CheckTokenMiddleware, MasterCardController_1.GetAllMasterCardController);
MasterCardRouter.post('/mastercard', CheckTokenMiddleware_1.CheckTokenMiddleware, MasterCardController_1.AddNewMasterCardController);
exports.default = MasterCardRouter;
//# sourceMappingURL=MasterCardRoutes.js.map