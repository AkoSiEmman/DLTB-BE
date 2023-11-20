export interface IRiderWallet {
    riderId: String;
    currencyId: String;
    address: String;
    privateKey: String;
    balance: number;
}
declare class RiderWalletRepository {
    GetAllRiderWallet(): Promise<unknown>;
    AddRiderWallet(riderWallet: IRiderWallet): Promise<unknown>;
    UpdateRiderWalletBalanceByCardId(cardId: string, decreaseAmount: Number, increaseAmount: Number): Promise<unknown>;
    UpdateRiderWalletByRiderId(riderId: string, increaseAmount: number, decreaseAmount: number): Promise<unknown>;
    GetBalancePerRiderId(riderId: String): Promise<number>;
    GetRiderWalletByRiderId(riderId: String): Promise<unknown>;
    FindCardInRiderWallet(cardId: string): Promise<IRiderWallet | boolean | string>;
}
declare const _default: RiderWalletRepository;
export default _default;
