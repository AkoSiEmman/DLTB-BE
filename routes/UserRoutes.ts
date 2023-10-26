import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { AddUserContorller, GetAllUserController, GetUserByIdController } from "../controllers/UserController";

const UserRouter = Router();


UserRouter.get("/user", CheckTokenMiddleware , GetAllUserController)

UserRouter.get("/user/:id", CheckTokenMiddleware , GetUserByIdController)

UserRouter.post("/user", CheckTokenMiddleware, AddUserContorller);

export default UserRouter;