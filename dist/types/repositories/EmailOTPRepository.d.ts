import mongoose from "mongoose";
import { IEmailOTP } from "../models/EmailOTPModel";
declare class EmailOTPRepository {
    GetAll(): Promise<IEmailOTP[] | undefined>;
    AddData(email: string, otp: string): Promise<unknown>;
    GetDataPerEmail(email: string): Promise<IEmailOTP[] | null>;
    DeleteDataPerId(id: string): Promise<(mongoose.Document<unknown, {}, {
        email: string;
        dateOfExpiration: Date;
        otpValue: string;
    }> & Omit<{
        email: string;
        dateOfExpiration: Date;
        otpValue: string;
    } & {
        _id: mongoose.Types.ObjectId;
    }, never>) | null>;
}
export declare const emailOTPRepository: EmailOTPRepository;
export {};
