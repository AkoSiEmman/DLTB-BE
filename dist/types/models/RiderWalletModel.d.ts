import mongoose from "mongoose";
declare const RiderWalletModel: mongoose.Model<{
    balance: number;
    riderId: string;
    currencyId: string;
    address: string;
    privateKey: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    balance: number;
    riderId: string;
    currencyId: string;
    address: string;
    privateKey: string;
}> & {
    balance: number;
    riderId: string;
    currencyId: string;
    address: string;
    privateKey: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    balance: number;
    riderId: string;
    currencyId: string;
    address: string;
    privateKey: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    balance: number;
    riderId: string;
    currencyId: string;
    address: string;
    privateKey: string;
}>> & mongoose.FlatRecord<{
    balance: number;
    riderId: string;
    currencyId: string;
    address: string;
    privateKey: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default RiderWalletModel;
