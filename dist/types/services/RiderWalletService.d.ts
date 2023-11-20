import { IMasterCard } from "../models/MasterCardModel";
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
    isMasterCard(card: IMasterCard | string | boolean): card is IMasterCard;
    isRiderCard(card: IRiderWallet | string | boolean): card is IRiderWallet;
    GetBalancePerCardId(cardId: string, cardType: string): Promise<{
        status: number;
        message: string;
        response: {
            balance: number;
        };
    } | {
        status: number;
        message: unknown;
        response: {
            balance?: undefined;
        };
    } | undefined>;
    UpdateRiderWalletByCardId(cardId: string, decreaseAmount: number, increaseAmount: number, cardType: String): Promise<{
        status: number;
        message: string;
        response: {
            previousBalance: number;
            newBalance: number | null;
        };
    } | {
        status: number;
        message: unknown;
        response: {
            previousBalance?: undefined;
            newBalance?: undefined;
        };
    }>;
    GetRiderWalletCardIdPerId(cardId: string): Promise<{
        status: number;
        message: string;
        response: IRiderWallet;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: RiderWalletService;
export default _default;
