import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { CreateNewTORMAINController, GetAllDataPerCoopIdController, GetTORMainByCoopIdAndDateController, PatchTORMAINController, SyncTorMainController } from "../controllers/TorMainController";

const TORMainRouter = Router();

// TORMainRouter.get('/tor/main',CheckTokenMiddleware, GetAllTORMainController);

// TORMainRouter.get('/tor/main/:id', CheckTokenMiddleware, GetAllDataPerCoopIdController);

// TORMainRouter.post('/tor/main', CheckTokenMiddleware, SearchForTORMAINController);
TORMainRouter.post('/tor/main/', CheckTokenMiddleware,  CreateNewTORMAINController);
TORMainRouter.get('/tor/main', CheckTokenMiddleware,)

TORMainRouter.patch('/tor/main/:id', CheckTokenMiddleware, PatchTORMAINController);

// TORMainRouter.put('/tor/main', CheckTokenMiddleware, () =>{});

TORMainRouter.get('/tor/main/:id' , CheckTokenMiddleware, GetAllDataPerCoopIdController);

TORMainRouter.post('/tor/main/:id', CheckTokenMiddleware, GetTORMainByCoopIdAndDateController);

TORMainRouter.get('/sync/tor/main' , CheckTokenMiddleware, SyncTorMainController); 

export default TORMainRouter;