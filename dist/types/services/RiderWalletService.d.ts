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
    UpdateRiderWalletByCardId(cardId: string, decreaseAmount: number, increaseAmount: number, cardType: String): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
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
