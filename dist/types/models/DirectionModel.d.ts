import mongoose from "mongoose";
declare const DirectionModel: mongoose.Model<{
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
    createdAt: Date;
    updatedAt: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
    createdAt: Date;
    updatedAt: Date;
}> & {
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
    createdAt: Date;
    updatedAt: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
    createdAt: Date;
    updatedAt: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
    createdAt: Date;
    updatedAt: Date;
}>> & mongoose.FlatRecord<{
    route_code: string;
    bound: string;
    origin: string;
    destination: string;
    createdAt: Date;
    updatedAt: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default DirectionModel;
