import mongoose, { Document } from "mongoose";
export interface IEmailOTP extends Document {
    _id: Object;
    email: string;
    otpValue: string;
    dateOfExpiration: Date;
}
declare const EmailOTPModel: mongoose.Model<{
    email: string;
    dateOfExpiration: Date;
    otpValue: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    dateOfExpiration: Date;
    otpValue: string;
}> & Omit<{
    email: string;
    dateOfExpiration: Date;
    otpValue: string;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    dateOfExpiration: Date;
    otpValue: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    dateOfExpiration: Date;
    otpValue: string;
}>> & Omit<mongoose.FlatRecord<{
    email: string;
    dateOfExpiration: Date;
    otpValue: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default EmailOTPModel;
