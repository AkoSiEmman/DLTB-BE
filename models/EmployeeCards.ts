import mongoose from "mongoose";

const employeeCardSchema = new mongoose.Schema({

    employeeId:{
        type: String,
        unique: true,
        required: true,
    },

    cardId:{
        type: String,
        unique: true,
        required: true,
    },

    createdAt : {
        type: Date,
        default: Date.now
    },

    updatedAt : {
        type: Date,
        default: Date.now
    }

})

const EmployeeCardModel = mongoose.model("EmployeeCardRecords",employeeCardSchema);

export default EmployeeCardModel;