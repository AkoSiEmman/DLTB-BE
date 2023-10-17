
import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateNewEmployeeCardController, GetAllEmployeeCardController } from "../controllers/EmployeeCardController";

const EmployeeCardRouter = Router();

EmployeeCardRouter.get("/employeecard" , CheckTokenMiddleware, GetAllEmployeeCardController);

EmployeeCardRouter.post("/employeecard" , CheckTokenMiddleware, CreateNewEmployeeCardController);

export default EmployeeCardRouter;