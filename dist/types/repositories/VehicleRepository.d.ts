export interface IVehicle {
    vehicle_no: String;
    plate_no: String;
}
declare class VehicleRepository {
    GetAllVehicles(): Promise<unknown>;
    GetAllDataPerCoopId(coopId: string): Promise<unknown>;
    AddVehicle(vehicle: IVehicle): Promise<unknown>;
}
declare const _default: VehicleRepository;
export default _default;
