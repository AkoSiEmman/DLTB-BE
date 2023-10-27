import mongoose, { Document } from "mongoose";
export interface IMasterCard extends Document {
    cardId: string;
    riderId: String;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}
declare const masterCardModel: mongoose.Model<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
}> & Omit<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
}>> & Omit<mongoose.FlatRecord<{
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default masterCardModel;
