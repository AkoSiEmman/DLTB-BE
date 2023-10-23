import mongoose from "mongoose";
export interface IRider {
    name: String;
    emailStatus: String;
    cardId: String;
    email: String;
    password: String;
    createdAt: Date;
    updateAt: Date;
    sNo: String;
}
declare const RiderModel: mongoose.Model<{
    password: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    email: string;
    sNo: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    email: string;
    sNo: string;
}> & {
    password: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    email: string;
    sNo: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    email: string;
    sNo: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    email: string;
    sNo: string;
}>> & mongoose.FlatRecord<{
    password: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    email: string;
    sNo: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default RiderModel;
