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
}> & {
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
}>> & mongoose.FlatRecord<{
    dateCreated: Date;
    username?: string | undefined;
    password?: string | undefined;
    recordId?: string | undefined;
    cardId?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default CardUserModel;
