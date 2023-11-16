import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({

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

const VehicleModel = mongoose.model("VehicleRecords", vehicleSchema);

export default VehicleModel;