import { ITrip } from "../repositories/TORTripRepository";
declare class TORTripServices {
    AddNewTORTrip(tor: ITrip): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response?: undefined;
    }>;
    GetAllTORTrip(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response?: undefined;
    }>;
}
declare const _default: TORTripServices;
export default _default;
