import { Router } from "express";
import { CheckTokenMiddleware } from "../dist/types/middlewares/CheckTokenMiddleware";
import { AddCooperativeController, GetAllCooperativeController } from "../controllers/CooperativeController";

const CooperativeRouter = Router();

CooperativeRouter.get("/cooperative", CheckTokenMiddleware, GetAllCooperativeController);

CooperativeRouter.post("/cooperative", CheckTokenMiddleware, AddCooperativeController);

export default CooperativeRouter;