import mongoose from "mongoose";
declare const DirectionModel: mongoose.Model<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    bound: string;
    origin: string;
    destination: string;
    code: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    bound: string;
    origin: string;
    destination: string;
    code: string;
}> & Omit<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    bound: string;
    origin: string;
    destination: string;
    code: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    bound: string;
    origin: string;
    destination: string;
    code: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    bound: string;
    origin: string;
    destination: string;
    code: string;
}>> & Omit<mongoose.FlatRecord<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    bound: string;
    origin: string;
    destination: string;
    code: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default DirectionModel;
