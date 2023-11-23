import { Router } from "express";
import { CheckTokenMiddleware } from "../middlewares/CheckTokenMiddleware";
import { GetFilipayCardController } from "../controllers/FilipayCardController";

const FilipayCardRouter = Router();

FilipayCardRouter.get("/filipaycard" , CheckTokenMiddleware, GetFilipayCardController)

export default FilipayCardRouter;