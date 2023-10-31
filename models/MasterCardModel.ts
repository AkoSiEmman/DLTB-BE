import mongoose , {Document} from "mongoose";

export interface IMasterCard extends Document {
    cardId: string,
    riderId : String,
    balance: number,
    createdAt: Date,
    updatedAt: Date,
}

const masterSchema = new mongoose.Schema({

    riderId:{
        type: String,
        unique: true,
        required: true,
    },

    cardId:{
        type: String,
        unique: true,
        required: true,
    },

    balance:{
        type: Number,
        default: 0.00,
        required: true,
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