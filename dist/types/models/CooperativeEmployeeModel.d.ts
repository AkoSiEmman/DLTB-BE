import mongoose, { Document } from "mongoose";
export interface ICooperativeEmployeeSchema {
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
    companyName: string;
    email: string;
    password: string;
}
export interface ICooperativeEmployee extends Document {
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
    companyName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const CooperativeEmployeeModel: mongoose.Model<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    createdAt: Date;
    position: string;
    companyName: string;
    updatedAt?: Date | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    createdAt: Date;
    position: string;
    companyName: string;
    updatedAt?: Date | undefined;
}> & Omit<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    createdAt: Date;
    position: string;
    companyName: string;
    updatedAt?: Date | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    createdAt: Date;
    position: string;
    companyName: string;
    updatedAt?: Date | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    createdAt: Date;
    position: string;
    companyName: string;
    updatedAt?: Date | undefined;
}>> & Omit<mongoose.FlatRecord<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    createdAt: Date;
    position: string;
    companyName: string;
    updatedAt?: Date | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default CooperativeEmployeeModel;
