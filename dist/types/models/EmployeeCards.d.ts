import mongoose from "mongoose";
declare const EmployeeCardModel: mongoose.Model<{
    coopId: string;
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    coopId: string;
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}> & Omit<{
    coopId: string;
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    coopId: string;
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    coopId: string;
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}>> & Omit<mongoose.FlatRecord<{
    coopId: string;
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default EmployeeCardModel;
