"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CheckTokenMiddleware_1 = require("../middlewares/CheckTokenMiddleware");
const TorMainController_1 = require("../controllers/TorMainController");
const TORMainRouter = (0, express_1.Router)();
TORMainRouter.get('/tor/main', CheckTokenMiddleware_1.CheckTokenMiddleware, TorMainController_1.GetAllTORMainController);
TORMainRouter.post('/tor/main/', CheckTokenMiddleware_1.CheckTokenMiddleware, TorMainController_1.CreateNewTORMAINController);
TORMainRouter.get('/tor/main', CheckTokenMiddleware_1.CheckTokenMiddleware);
TORMainRouter.patch('/tor/main/:id', CheckTokenMiddleware_1.CheckTokenMiddleware, TorMainController_1.PatchTORMAINController);
TORMainRouter.get('/sync/tor/main', CheckTokenMiddleware_1.CheckTokenMiddleware, TorMainController_1.SyncTorMainController);
exports.default = TORMainRouter;
//# sourceMappingURL=TORMainRoutes.js.map