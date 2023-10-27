import mongoose from "mongoose";
declare const DirectionModel: mongoose.Model<{
    createdAt: Date;
    updatedAt: Date;
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    updatedAt: Date;
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
}> & Omit<{
    createdAt: Date;
    updatedAt: Date;
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    updatedAt: Date;
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default DirectionModel;
