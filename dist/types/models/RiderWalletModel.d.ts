import mongoose, { Document } from "mongoose";
export interface IRiderWallet extends Document {
    riderId: String;
    currencyId: String;
    address: String;
    privateKey: String;
    balance: number;
}
declare const RiderWalletModel: mongoose.Model<{
    riderId: mongoose.Types.ObjectId;
    balance: number;
    currencyId: string;
    address: string;
    privateKey: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    riderId: mongoose.Types.ObjectId;
    balance: number;
    currencyId: string;
    address: string;
    privateKey: string;
}> & Omit<{
    riderId: mongoose.Types.ObjectId;
    balance: number;
    currencyId: string;
    address: string;
    privateKey: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    riderId: mongoose.Types.ObjectId;
    balance: number;
    currencyId: string;
    address: string;
    privateKey: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    riderId: mongoose.Types.ObjectId;
    balance: number;
    currencyId: string;
    address: string;
    privateKey: string;
}>> & Omit<mongoose.FlatRecord<{
    riderId: mongoose.Types.ObjectId;
    balance: number;
    currencyId: string;
    address: string;
    privateKey: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default RiderWalletModel;
