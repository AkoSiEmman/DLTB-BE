import mongoose from "mongoose";
declare const EmployeeCardModel: mongoose.Model<{
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}> & {
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}>> & mongoose.FlatRecord<{
    empNo: string;
    cardId: string;
    createdAt: Date;
    updatedAt: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default EmployeeCardModel;
