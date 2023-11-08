/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
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
    CreateTORFuel(tor: IFuel): Promise<false | (import("mongoose").Document<unknown, {}, {
        recordId: string;
        modId: string;
        fieldData: import("mongoose").Types.DocumentArray<{
            route: string;
            dateCreated: Date;
            device_id: string;
            control_no: string;
            date_of_trip: Date;
            bus_no: string;
            route_code: string;
            remarks: string;
            bound: string;
            trip_no: number;
            timestamp: Date;
            lat: string;
            long: string;
            refuel_date: Date;
            refuel_time: string;
            fuel_station: string;
            fuel_liters: number;
            fuel_amount: number;
            fuel_price_per_liter: number;
            fuel_attendant_id: number;
            fuel_attendant: string;
            full_tank: string;
            UUID?: string | undefined;
        }>;
        portalData?: any;
    }> & Omit<{
        recordId: string;
        modId: string;
        fieldData: import("mongoose").Types.DocumentArray<{
            route: string;
            dateCreated: Date;
            device_id: string;
            control_no: string;
            date_of_trip: Date;
            bus_no: string;
            route_code: string;
            remarks: string;
            bound: string;
            trip_no: number;
            timestamp: Date;
            lat: string;
            long: string;
            refuel_date: Date;
            refuel_time: string;
            fuel_station: string;
            fuel_liters: number;
            fuel_amount: number;
            fuel_price_per_liter: number;
            fuel_attendant_id: number;
            fuel_attendant: string;
            full_tank: string;
            UUID?: string | undefined;
        }>;
        portalData?: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)>;
    GetAllTOURFuel(): Promise<{}>;
}
declare const _default: TORFuelRepository;
export default _default;
