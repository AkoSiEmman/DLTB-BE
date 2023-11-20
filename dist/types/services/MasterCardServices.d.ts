import { IMasterCard } from "../models/MasterCardModel";
declare class MasterCardServices {
    GetAllMasterCard(): Promise<any>;
    GetAllMasterCardByCoopId(coopId: string): Promise<any>;
    CreateNewMasterCard(masterCard: IMasterCard): Promise<any>;
}
declare const _default: MasterCardServices;
export default _default;
