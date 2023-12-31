import { ObjectId } from "mongodb";
import mongoose, {Document} from "mongoose";

export interface IStation extends Document{
  
    coopId: string,
    
    stationName: string,

    km: number,

    viceVersaKM: number,

    routeId: string

}

const stationSchema = new mongoose.Schema({

    coopId:{
        type: String,
        index: true,
        default: "655321a339c1307c069616e9"
    },

    stationName : {
        type: String,
        required: true,
        index: true
    },

    km :{
        type: Number,
        required: true,
        index: true
    },

    viceVersaKM:{
        type: Number,
        required: true,
        index: true
    },

    routeId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },

    createdAt: {
        type: Date,
        default: new Date,
        index: true
    },

    updatedAt :{
        type: Date,
        default: new Date,
        index: true
    }

});

const StationModel = mongoose.model("stationrecords", stationSchema, { collection: "stationrecords" }.collection);

export default StationModel;