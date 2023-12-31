import mongoose from "mongoose";

const employeeCardSchema = new mongoose.Schema({

    
    coopId:{
        type: String,
        unique: true,
        default: "655321a339c1307c069616e9",
        required: true
    },
    empNo:{
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

const EmployeeCardModel = mongoose.model("employeecardrecords",employeeCardSchema, {collection :"employeecardrecords" }.collection);

export default EmployeeCardModel;