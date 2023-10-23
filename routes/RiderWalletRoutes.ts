

import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { AddRiderWalletController, GetAllRiderWalletController, GetRiderWalletPerIdController, UpdateRiderWalletBalanceController } from "../controllers/RiderWalletController";


const RiderWalletRouter = Router();

RiderWalletRouter.get("/riderwallet", CheckTokenMiddleware, GetAllRiderWalletController)

RiderWalletRouter.get("/riderwallet/:cardId", CheckTokenMiddleware, GetRiderWalletPerIdController);

RiderWalletRouter.post("/riderwallet" , CheckTokenMiddleware, AddRiderWalletController)

RiderWalletRouter.put("/riderwallet", CheckTokenMiddleware, UpdateRiderWalletBalanceController)

export default RiderWalletRouter;