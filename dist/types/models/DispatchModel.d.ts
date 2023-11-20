import mongoose from "mongoose";
declare const DispatchModel: mongoose.Model<{
    designation: string;
    date: Date;
    route: string;
    bound: string;
    coopName: string;
    torNo: string;
    otNo: string;
    atm: string;
    tripNo: string;
    driverName: string;
    conductorName: string;
    dispatcherName: string;
    trip: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    designation: string;
    date: Date;
    route: string;
    bound: string;
    coopName: string;
    torNo: string;
    otNo: string;
    atm: string;
    tripNo: string;
    driverName: string;
    conductorName: string;
    dispatcherName: string;
    trip: string;
}> & Omit<{
    designation: string;
    date: Date;
    route: string;
    bound: string;
    coopName: string;
    torNo: string;
    otNo: string;
    atm: string;
    tripNo: string;
    driverName: string;
    conductorName: string;
    dispatcherName: string;
    trip: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    designation: string;
    date: Date;
    route: string;
    bound: string;
    coopName: string;
    torNo: string;
    otNo: string;
    atm: string;
    tripNo: string;
    driverName: string;
    conductorName: string;
    dispatcherName: string;
    trip: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    designation: string;
    date: Date;
    route: string;
    bound: string;
    coopName: string;
    torNo: string;
    otNo: string;
    atm: string;
    tripNo: string;
    driverName: string;
    conductorName: string;
    dispatcherName: string;
    trip: string;
}>> & Omit<mongoose.FlatRecord<{
    designation: string;
    date: Date;
    route: string;
    bound: string;
    coopName: string;
    torNo: string;
    otNo: string;
    atm: string;
    tripNo: string;
    driverName: string;
    conductorName: string;
    dispatcherName: string;
    trip: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default DispatchModel;
