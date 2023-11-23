import mongoose , {Document} from "mongoose";

export interface IMasterCard extends Document {
    coopId: string,
    cardID: string,
    riderId : String,
    balance: number,
    cardType: string,
    createdAt: Date,
    updatedAt: Date,
}

const masterSchema = new mongoose.Schema({

    coopId:{
        type: String,
        unique: true,
        default: "655321a339c1307c069616e9",
        required: true
    },
    
    riderId:{
        type: String,
        unique: true,
        required: true,
    },

    cardID:{
        type: String,
        unique: true,
        required: true,
    },

    balance:{
        type: Number,
        default: 0.00,
        required: true,
    },

    cardType:{
        type: String,
        default:"mastercard"
    },

    createdAt:{
        type: Date,
        default: new Date,
        required: true,
    },

    updatedAt:{
        type: Date,
        default: new Date,
        required: true,
    }

})

const masterCardModel = mongoose.model("mastercardrecords", masterSchema,{ collection: "mastercardrecords" }.collection);

export default masterCardModel;