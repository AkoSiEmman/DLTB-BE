import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTORTripController,  GetTORTripPerCoopIdController } from "../controllers/TORTripController";
import { GetTORRemittanceByCoopIdAndDateController } from "../controllers/TORRemittanceController";

const TORTripRouter = Router();
TORTripRouter.get('/tor/trip/:id', CheckTokenMiddleware, GetTORTripPerCoopIdController)
// TORTripRouter.get('/tor/trip', CheckTokenMiddleware, GetAllTORTripController)
TORTripRouter.post('/tor/trip' , CheckTokenMiddleware, CreateTORTripController );

TORTripRouter.post('/tor/trip/:id', CheckTokenMiddleware, GetTORRemittanceByCoopIdAndDateController);

export default TORTripRouter;