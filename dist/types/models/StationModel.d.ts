import mongoose, { Document } from "mongoose";
export interface IStation extends Document {
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: string;
}
declare const StationModel: mongoose.Model<{
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}> & Omit<{
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    stationName: string;
    km: number;
    viceVersaKM: number;
    routeId: mongoose.Types.ObjectId;
}>> & Omit<mongoose.FlatRecord<{
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
