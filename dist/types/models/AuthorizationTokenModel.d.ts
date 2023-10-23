import mongoose from "mongoose";
declare const AuthorizationTokenModel: mongoose.Model<{
    token: string;
    dateCreated: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    token: string;
    dateCreated: Date;
}> & {
    token: string;
    dateCreated: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    token: string;
    dateCreated: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    token: string;
    dateCreated: Date;
}>> & mongoose.FlatRecord<{
    token: string;
    dateCreated: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default AuthorizationTokenModel;
