import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateTorTicketController, GetTORTicketMainByCoopIdAndDateController, GetTORTicketPerCoopIdController, SyncTORTicketController } from "../controllers/TORTicketController";

const TORTicketRouter = Router();

// TORTicketRouter.get('/tor/ticket', CheckTokenMiddleware , GetAllTicketController);
TORTicketRouter.get('/tor/ticket/:id', CheckTokenMiddleware, GetTORTicketPerCoopIdController)
TORTicketRouter.post('/tor/ticket' , CheckTokenMiddleware , CreateTorTicketController)
TORTicketRouter.get('/sync/tor/ticket', CheckTokenMiddleware, SyncTORTicketController);
TORTicketRouter.post('/tor/main/:id', CheckTokenMiddleware, GetTORTicketMainByCoopIdAndDateController);
export default TORTicketRouter;