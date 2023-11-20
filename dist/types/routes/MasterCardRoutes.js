"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const MasterCardController_1 = require("../controllers/MasterCardController");
const MasterCardRouter = (0, express_1.Router)();
MasterCardRouter.post('/mastercard', CheckTokenMiddleware_1.CheckTokenMiddleware, MasterCardController_1.AddNewMasterCardController);
MasterCardRouter.get('/mastercard/:id', CheckTokenMiddleware_1.CheckTokenMiddleware, MasterCardController_1.GetAllMasterCardByCoopIdController);
exports.default = MasterCardRouter;
//# sourceMappingURL=MasterCardRoutes.js.map