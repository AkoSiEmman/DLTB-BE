import mongoose, {Document} from "mongoose"

export interface ICooperative extends Document{

    cooperativeName : string,

    cooperativeCodeName : string,

    createdAt: Date,

}

const cooperativeSchema = new mongoose.Schema({
    
    cooperativeName : {
        type: String,
        required: true,
        unique: true,
        index: true,
    },

    cooperativeCodeName : {

        type: String,
        required : true,
        unique: true,
        index: true

    },

    createdAt:{
        type: Date,
        default: new Date(),
        index: true
    }


})

const CooperativeModel = mongoose.model("cooperativesrecords",cooperativeSchema, { collection: "cooperativesrecords"}.collection );

export default CooperativeModel;