import mongoose from "mongoose";
declare const VehicleModel: mongoose.Model<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    vehicle_no: string;
    plate_no: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    vehicle_no: string;
    plate_no: string;
}> & Omit<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    vehicle_no: string;
    plate_no: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    vehicle_no: string;
    plate_no: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    vehicle_no: string;
    plate_no: string;
}>> & Omit<mongoose.FlatRecord<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    vehicle_no: string;
    plate_no: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default VehicleModel;
