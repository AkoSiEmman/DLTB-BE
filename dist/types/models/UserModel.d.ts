import mongoose from "mongoose";
export interface IUser {
    profileImageUrl: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    role: string;
    password: string;
    isEmailVerified: boolean;
    updatedAt: Date;
    createdAt: Date;
}
declare const UserModel: mongoose.Model<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    profileImageUrl: string;
    email: string;
    isEmailVerified: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    profileImageUrl: string;
    email: string;
    isEmailVerified: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}> & Omit<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    profileImageUrl: string;
    email: string;
    isEmailVerified: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    profileImageUrl: string;
    email: string;
    isEmailVerified: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    profileImageUrl: string;
    email: string;
    isEmailVerified: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}>> & Omit<mongoose.FlatRecord<{
    password: string;
    lastName: string;
    firstName: string;
    middleName: string;
    profileImageUrl: string;
    email: string;
    isEmailVerified: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default UserModel;
