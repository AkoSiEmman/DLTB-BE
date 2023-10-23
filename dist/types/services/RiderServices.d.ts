import { IRider } from "../models/RiderModel";
declare class RiderServices {
    GetRiderByCardId(cardId: String): Promise<{
        status: number;
        message: string;
        response: any;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    GetAllRider(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddRiderWallet(rider: IRider): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: RiderServices;
export default _default;
