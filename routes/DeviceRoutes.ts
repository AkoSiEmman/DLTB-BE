import {Router} from 'express'
import { CheckTokenMiddleware } from '../middlewares/CheckTokenMiddleware';
import { AddDeviceController, GetAllDeviceController } from '../controllers/DeviceController';

const DeviceRouter = Router();

DeviceRouter.get("/device", CheckTokenMiddleware, GetAllDeviceController);

DeviceRouter.post("/device", CheckTokenMiddleware, AddDeviceController);

export default DeviceRouter;