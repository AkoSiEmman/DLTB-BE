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
interface ITORFuel {
    portalData: {};
    recordId: string;
    modId: string;
    fieldDate: IFuel;
}
declare class TORFuelRepository {
    FindAndReplaceTORFuel(tor: ITORFuel): Promise<boolean>;
    GetAllTOURFuel(): Promise<{}>;
}
declare const _default: TORFuelRepository;
export default _default;
