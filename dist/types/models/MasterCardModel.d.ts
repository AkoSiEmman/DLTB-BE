import mongoose from "mongoose";
declare const masterCardModel: mongoose.Model<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;
}> & {
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;
}>> & mongoose.FlatRecord<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default masterCardModel;
