import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({

    coopId:{
        type: String,
        unique: true,
        default: "655321a339c1307c069616e9",
        required: true
    },

    vehicle_no: {
        type: String,
        unique: true,
        required: true
    },

    plate_no:{
        type: String,
        required: true,
        unique: true
    },

    createdAt:{
        type: Date,
        default: new Date
    },

    updatedAt:{
        type: Date,
        default: new Date
    }

})

const VehicleModel = mongoose.model("vehiclerecords", vehicleSchema, {collection : "vehiclerecords"}.collection);

export default VehicleModel;