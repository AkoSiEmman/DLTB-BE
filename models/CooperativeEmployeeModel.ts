import mongoose, { ObjectId } from "mongoose";

export interface ICooperativeEmployee extends mongoose.Document {

    firstName: string;

    middleName: string;

    lastName: string;

    position: string;

    companyName: string;

    password : string;

    createdAt: Date;

    updatedAt: Date;

}



const cooperativeEmployeeSchema = new mongoose.Schema({

    firstName :{
        type: String,
        required: true,
        index : true
    },
    
    middleName :{
        type: String,
        default: "",
        index: true
    },

    lastName :{
        type: String,
        required: true,
        index: true
    },

    position:{
        type: String,
        required: true,
        index: true
    },

    companyName:{
        type: String,
        required: true,
        index: true
    },

    password:{
        type: String,
        required: true,
        index: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
    }
    

});

const CooperativeEmployeeModel = mongoose.model("cooperativeemployeerecords", cooperativeEmployeeSchema ,{ collection: "cooperativeemployeerecords" }.collection);

export default CooperativeEmployeeModel;