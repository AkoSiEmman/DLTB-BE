import mongoose from "mongoose";
declare const CardUserModel: mongoose.Model<{
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
}> & Omit<{
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
}>> & Omit<mongoose.FlatRecord<{
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default CardUserModel;
