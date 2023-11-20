import mongoose from "mongoose";
declare const CardUserModel: mongoose.Model<{
    username: string;
    password: string;
    dateCreated: Date;
    cardId: string;
    recordId: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
    dateCreated: Date;
    cardId: string;
    recordId: string;
}> & Omit<{
    username: string;
    password: string;
    dateCreated: Date;
    cardId: string;
    recordId: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
    dateCreated: Date;
    cardId: string;
    recordId: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    password: string;
    dateCreated: Date;
    cardId: string;
    recordId: string;
}>> & Omit<mongoose.FlatRecord<{
    username: string;
    password: string;
    dateCreated: Date;
    cardId: string;
    recordId: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default CardUserModel;
