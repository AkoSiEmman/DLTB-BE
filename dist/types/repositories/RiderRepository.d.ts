import { IRider } from "../models/RiderModel";
declare class RiderRepository {
    GetAllRider(): Promise<unknown>;
    AddRider(rider: IRider): Promise<unknown>;
    GetRiderByCardId(cardId: String): Promise<unknown>;
}
declare const _default: RiderRepository;
export default _default;
