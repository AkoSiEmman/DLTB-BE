export interface ITrouble {
    UUID: string;
    device_id: string;
    control_no: string;
    tor_no: string;
    date_of_trip: string;
    bus_no: string;
    route: string;
    route_code: string;
    bound: string;
    trip_no: number;
    inspector_emp_no: string;
    inspector_emp_name: string;
    onboard_time: string;
    onboard_place: string;
    onboard_km_post: number;
    trouble_description: string;
    timestamp: string;
    lat: string;
    long: string;
}
export interface ITORTrouble {
    portalId: {};
    recordId: string;
    modId: string;
    fieldData: ITrouble;
}
declare class TORTroubleRepository {
    GetAllTor(): Promise<unknown>;
    CreateTOR(fieldData: ITrouble): Promise<unknown>;
}
declare const _default: TORTroubleRepository;
export default _default;
