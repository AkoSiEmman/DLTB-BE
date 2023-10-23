import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { AddStationController, GetAllStationController } from "../controllers/StationController";

const StationRouter = Router();

StationRouter.get("/station", CheckTokenMiddleware, GetAllStationController)

StationRouter.post("/station", CheckTokenMiddleware, AddStationController)

export default StationRouter;