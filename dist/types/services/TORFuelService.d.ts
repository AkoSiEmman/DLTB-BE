interface IFuel {
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
    refuel_date: string;
    refuel_time: string;
    fuel_station: string;
    fuel_liters: number;
    fuel_amount: number;
    fuel_price_per_liter: number;
    fuel_attendant_id: number;
    fuel_attendant: string;
    full_tank: string;
    timestamp: string;
    lat: string;
    long: string;
    remarks: string;
}
declare class TORFuelService {
    SyncGETAllTORFuelService(): Promise<any>;
    CreateTORFuelService(torFuel: IFuel): Promise<{
        status: number;
        message: unknown;
    }>;
    GetAllTORFuelService(): Promise<{}>;
    GenerateSession(): Promise<any>;
    EndSession(token: string | boolean): Promise<boolean>;
}
declare const _default: TORFuelService;
export default _default;
