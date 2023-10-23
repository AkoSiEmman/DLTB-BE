import { IRiderWallet } from "../repositories/RiderWalletRepository";
declare class RiderWalletService {
    GetAllRiderWallet(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddRiderWallet(riderWallet: IRiderWallet): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    UpdateRiderWalletByCardId(cardId: string, decreaseAmount: Number, increaseAmount: Number, cardType: String): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: RiderWalletService;
export default _default;
