
import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { AddVehicleController, GetAllVehicleController } from "../controllers/VehicleController";

const VehicleRouter = Router();

VehicleRouter.get("/vehicle" , CheckTokenMiddleware, GetAllVehicleController)
VehicleRouter.post("/vehicle", CheckTokenMiddleware, AddVehicleController)

export default VehicleRouter;