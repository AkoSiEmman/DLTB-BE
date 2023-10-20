import mongoose  from "mongoose";
import { connectToFilipayDB } from "../databases/DbConnection";

const filipayUrl : string = process.env.DB_FILIPAY_CONNECTION_STRING ? process.env.DB_FILIPAY_CONNECTION_STRING : '';


const riderWalletSchema = new mongoose.Schema({

    riderId : {
        type: String,
        required: true,
        index: true
    },

    currencyId:{
        type: String,
        required: true,
        index: true
    },

    address:{
        type: String,
        required: true,
        index: true
    },

    privateKey: {
        type: String,
        required: true,
        index: true
    },

    balance : {
        type: Number,
        required: true,
        index: true
    }

})

const RiderWalletModel = connectToFilipayDB(filipayUrl).model("riderwallet" , riderWalletSchema,{ collection: "riderwallet" }.collection);

export default RiderWalletModel;