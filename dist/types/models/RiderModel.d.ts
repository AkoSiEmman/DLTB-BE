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
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    sNo: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password: string;
    cardId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    sNo: string;
}> & Omit<{
    password: string;
    cardId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    sNo: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password: string;
    cardId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    sNo: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password: string;
    cardId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    sNo: string;
}>> & Omit<mongoose.FlatRecord<{
    password: string;
    cardId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    emailStatus: string;
    sNo: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default RiderModel;
