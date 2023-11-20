import { IMasterCard } from "../models/MasterCardModel";
declare class MasterCardRepository {
    GetAllMasterCard(): Promise<any>;
    GetCardByCoopId(coopId: string): Promise<any>;
    CreateNewMasterCard(masterCard: IMasterCard): Promise<unknown>;
    FindCardIdInMasterCard(cardId: string): Promise<IMasterCard | boolean | string>;
    GetCurrentBalancePerCardId(cardId: string): Promise<number | null>;
    UpdateMasterCardBalanceByCardId(cardId: string, decreaseAmount: Number, increaseAmount: Number): Promise<unknown>;
}
declare const _default: MasterCardRepository;
export default _default;
