import { IStation } from "../models/StationModel";
declare class StationRepository {
    GetAllStation(): Promise<IStation[]>;
    AddStation(newStation: IStation): Promise<any>;
}
declare const _default: StationRepository;
export default _default;
