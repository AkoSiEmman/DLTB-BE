import mongoose, { Document } from "mongoose";
export interface IMasterCard extends Document {
    coopId: string;
    cardId: string;
    riderId: String;
    balance: number;
    cardType: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const masterCardModel: mongoose.Model<{
    coopId: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
    cardType: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    coopId: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
    cardType: string;
}> & Omit<{
    coopId: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
    cardType: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    coopId: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
    cardType: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    coopId: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
    cardType: string;
}>> & Omit<mongoose.FlatRecord<{
    coopId: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    riderId: string;
    balance: number;
    cardType: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default masterCardModel;
