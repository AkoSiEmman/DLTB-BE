import mongoose from "mongoose";

export interface IUser { 

    profileImageUrl : string,

    firstName : string,

    middleName : string,

    lastName : string,

    email : string,

    role: string,

    password : string,

    isEmailVerified : boolean,

    updatedAt: Date,

    createdAt : Date,

}

const userSchema = new mongoose.Schema({

    profileImageUrl: {
        type : String,  
        index: true,
        default : "https://res.cloudinary.com/doachm6y7/image/upload/v1698295253/conlkfzanf4ycze4ya3x.jpg"
    },

    firstName :{
        type: String,
        index: true,
        required: true
    },

    middleName: {
        type: String,
        index: true,
        default :""
    },

    lastName: {
        type: String,
        index: true,
        required: true
    },

    email : {
        type: String,
        index: true,
        unique: true,
        required: true,
    },

    isEmailVerified: {
        type: Boolean,
        index: true,
        default : false,
    },

    role:{
        type: String,
        index: true,
        required: true
    },

    password: {
        type: String,
        index: true,
        required: true
    },

    createdAt :{
        type: Date,
        index: true,
        default : new Date
    },

    updatedAt : {
        type: Date,
        index: true,
        default: new Date
    }

})

const UserModel = mongoose.model("userecords", userSchema,{ collection: "userecords" }.collection);

export default UserModel;