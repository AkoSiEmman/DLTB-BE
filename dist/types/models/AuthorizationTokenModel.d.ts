import mongoose from "mongoose";
declare const AuthorizationTokenModel: mongoose.Model<{
    token: string;
    dateCreated: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    token: string;
    dateCreated: Date;
}> & Omit<{
    token: string;
    dateCreated: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    token: string;
    dateCreated: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    token: string;
    dateCreated: Date;
}>> & Omit<mongoose.FlatRecord<{
    token: string;
    dateCreated: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default AuthorizationTokenModel;
