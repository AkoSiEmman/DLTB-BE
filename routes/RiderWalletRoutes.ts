

import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { AddRiderWalletController, GetAllRiderWalletController } from "../controllers/RiderWalletController";

const RiderWalletRouter = Router();

RiderWalletRouter.get("/riderwallet", CheckTokenMiddleware, GetAllRiderWalletController)

RiderWalletRouter.post("/riderwallet" , CheckTokenMiddleware, AddRiderWalletController)

export default RiderWalletRouter;