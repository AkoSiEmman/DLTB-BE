import mongoose from "mongoose";
declare const VehicleModel: mongoose.Model<{
    createdAt: Date;
    updatedAt: Date;
    bus_no: string;
    plate_no: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    updatedAt: Date;
    bus_no: string;
    plate_no: string;
}> & Omit<{
    createdAt: Date;
    updatedAt: Date;
    bus_no: string;
    plate_no: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    updatedAt: Date;
    bus_no: string;
    plate_no: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    bus_no: string;
    plate_no: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    bus_no: string;
    plate_no: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default VehicleModel;
