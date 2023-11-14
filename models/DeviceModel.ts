

// _id, deviceid, coopid

import mongoose, {Document} from "mongoose";

export interface IDevice extends Document{

    deviceId : string,
    coopId: string,

}

const deviceSchema = new mongoose.Schema({
    deviceId :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    coopId :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }

})

const DeviceModel = mongoose.model("DeviceRecords", deviceSchema);

export default DeviceModel;
