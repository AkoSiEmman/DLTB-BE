import { IVehicle } from "../repositories/VehicleRepository";
declare class VehicleServices {
    GetAllVehicle(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    GetAllVehiclePerCoopId(coopId: string): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddVehicle(vehicle: IVehicle): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: VehicleServices;
export default _default;
