import mongoose, { Document } from "mongoose";
export interface ICooperative extends Document {
    cooperativeName: string;
    cooperativeCodeName: string;
    createdAt: Date;
}
declare const CooperativeModel: mongoose.Model<{
    createdAt: Date;
    cooperativeName: string;
    cooperativeCodeName: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    cooperativeName: string;
    cooperativeCodeName: string;
}> & Omit<{
    createdAt: Date;
    cooperativeName: string;
    cooperativeCodeName: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    cooperativeName: string;
    cooperativeCodeName: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    cooperativeName: string;
    cooperativeCodeName: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: Date;
    cooperativeName: string;
    cooperativeCodeName: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default CooperativeModel;
