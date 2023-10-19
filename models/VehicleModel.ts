import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({

    bus_no: {
        type: String,
        unique: true,
        required: true
    },

    plate_no:{
        type: String,
        required: true
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

const VehicleModel = mongoose.model("VehicleRecords", vehicleSchema);

export default VehicleModel;