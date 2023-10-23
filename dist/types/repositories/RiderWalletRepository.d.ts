export interface IRiderWallet {
    riderId: String;
    currencyId: String;
    address: String;
    privateKey: String;
    balance: Number;
}
declare class RiderWalletRepository {
    GetAllRiderWallet(): Promise<unknown>;
    AddRiderWallet(riderWallet: IRiderWallet): Promise<unknown>;
    UpdateRiderWalletBalanceByCardId(cardId: string, decreaseAmount: Number, increaseAmount: Number): Promise<unknown>;
    FindCardInRiderWallet(cardId: string): Promise<unknown>;
}
declare const _default: RiderWalletRepository;
export default _default;
