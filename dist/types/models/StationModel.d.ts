import mongoose, { Document } from "mongoose";
export interface IStation extends Document {
    coopId: string;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: string;
}
declare const StationModel: mongoose.Model<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}> & Omit<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}>> & Omit<mongoose.FlatRecord<{
    coopId: string;
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default StationModel;
