import { IStation } from "../models/StationModel";
declare class StationService {
    GetAllStation(): Promise<{
        status: number;
        message: string;
        response: IStation[];
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddStation(newStation: IStation): Promise<{
        status: number;
        message: string;
        response: any;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: StationService;
export default _default;
