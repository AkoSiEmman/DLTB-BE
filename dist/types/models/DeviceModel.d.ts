import mongoose, { Document } from "mongoose";
export interface IDevice extends Document {
    deviceId: string;
    coopId: string;
    deviceName: string;
    deviceType: string;
}
declare const DeviceModel: mongoose.Model<{
    coopId: string;
    dateCreated: Date;
    deviceId: string;
    deviceName: string;
    deviceType: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    coopId: string;
    dateCreated: Date;
    deviceId: string;
    deviceName: string;
    deviceType: string;
}> & Omit<{
    coopId: string;
    dateCreated: Date;
    deviceId: string;
    deviceName: string;
    deviceType: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    coopId: string;
    dateCreated: Date;
    deviceId: string;
    deviceName: string;
    deviceType: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    coopId: string;
    dateCreated: Date;
    deviceId: string;
    deviceName: string;
    deviceType: string;
}>> & Omit<mongoose.FlatRecord<{
    coopId: string;
    dateCreated: Date;
    deviceId: string;
    deviceName: string;
    deviceType: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default DeviceModel;
