import mongoose from "mongoose";
declare const VehicleModel: mongoose.Model<{
    bus_no: string;
    createdAt: Date;
    updatedAt: Date;
    plate_no: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    bus_no: string;
    createdAt: Date;
    updatedAt: Date;
    plate_no: string;
}> & {
    bus_no: string;
    createdAt: Date;
    updatedAt: Date;
    plate_no: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    bus_no: string;
    createdAt: Date;
    updatedAt: Date;
    plate_no: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    bus_no: string;
    createdAt: Date;
    updatedAt: Date;
    plate_no: string;
}>> & mongoose.FlatRecord<{
    bus_no: string;
    createdAt: Date;
    updatedAt: Date;
    plate_no: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default VehicleModel;
