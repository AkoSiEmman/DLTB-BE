import mongoose from "mongoose";

const directionSchema = new mongoose.Schema({

    bound:{
        type: String,
        index: true,
        required: true
    },

    origin:{
        type: String,
        index: true,
        required: true
    },

    destination:{
        type:String,
        index: true,
        required: true
    },

    route_code:{
        type: String,
        index: true,
        required: true
    },

    createdAt:{
        type:Date,
        index: true,
        default: Date.now()
    },


    updatedAt:{
        type: Date,
        index: true,
        default: Date.now()
    },

});

const DirectionModel = mongoose.model('DirectionRecords', directionSchema)

export default DirectionModel;