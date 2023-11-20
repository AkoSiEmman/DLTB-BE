import { IEmailOTP } from "../models/EmailOTPModel";
declare class EmailOTPService {
    GetAllData(): Promise<{
        status: number;
        message: string;
        response: IEmailOTP[] | undefined;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddData(email: string): Promise<{
        status: number;
        message: unknown;
        response: {};
    }>;
    ValidateOtp(otp: string, email: string): Promise<{
        status: number;
        message: unknown;
        response: {};
    }>;
    CheckOtpValidity(otpExpiration: Date): Promise<boolean>;
}
declare const _default: EmailOTPService;
export default _default;
