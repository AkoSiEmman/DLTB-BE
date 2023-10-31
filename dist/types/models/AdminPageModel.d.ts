import mongoose from "mongoose";
export interface IAdminPage extends mongoose.Document {
    pageName: string;
    pageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const AdminPageModel: mongoose.Model<{
    createdAt: Date;
    updatedAt: Date;
    pageName: string;
    pageUrl: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: Date;
    updatedAt: Date;
    pageName: string;
    pageUrl: string;
}> & Omit<{
    createdAt: Date;
    updatedAt: Date;
    pageName: string;
    pageUrl: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    updatedAt: Date;
    pageName: string;
    pageUrl: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    pageName: string;
    pageUrl: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: Date;
    updatedAt: Date;
    pageName: string;
    pageUrl: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default AdminPageModel;
