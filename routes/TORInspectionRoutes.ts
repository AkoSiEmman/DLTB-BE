import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTORInspectionController, GetTORInspectionPerCoopIdController } from "../controllers/TORInspectionController";

const TORInspectionRouter = Router();

// TORInspectionRouter.get('/tor/inspection', CheckTokenMiddleware, GetAllTORInspectionController);
TORInspectionRouter.get('/tor/inspection/:id', CheckTokenMiddleware, GetTORInspectionPerCoopIdController);
TORInspectionRouter.post('/tor/inspection', CheckTokenMiddleware, CreateTORInspectionController);

export default TORInspectionRouter;