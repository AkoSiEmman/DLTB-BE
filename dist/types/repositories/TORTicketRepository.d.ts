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
export interface ITORTicket {
    portalData: [];
    recordId: string;
    modId: string;
    fieldData: {
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
        ticket_no: string;
        ticket_type: string;
        ticket_status: string;
        timestamp: Date;
        from_place: string;
        to_place: string;
        from_km: number;
        to_km: number;
        km_run: number;
        fare: number;
        card_no: string;
        status: string;
        lat: string;
        long: string;
        created_on: Date;
        updated_on: Date;
        previous_balance: number;
        current_balance: number;
    };
}
declare class TORTicketRepository {
    GetAllTORTicket(): Promise<false | (import("mongoose").Document<unknown, {}, {
        recordId: string;
        modId: string;
        fieldData: import("mongoose").Types.DocumentArray<{
            route: string;
            dateCreated: Date;
            device_id: string;
            control_no: string;
            tor_no: string;
            date_of_trip: string;
            bus_no: string;
            route_code: string;
            bound: string;
            trip_no: number;
            ticket_no: string;
            ticket_type: string;
            ticket_status: string;
            timestamp: Date;
            from_place: string;
            to_place: string;
            from_km: number;
            to_km: number;
            km_run: number;
            fare: number;
            card_no: string;
            status: string;
            lat: string;
            long: string;
            created_on: Date;
            updated_on: Date;
            previous_balance: number;
            current_balance: number;
            UUID?: string | undefined;
        }>;
        portalData: any[];
    }> & Omit<{
        recordId: string;
        modId: string;
        fieldData: import("mongoose").Types.DocumentArray<{
            route: string;
            dateCreated: Date;
            device_id: string;
            control_no: string;
            tor_no: string;
            date_of_trip: string;
            bus_no: string;
            route_code: string;
            bound: string;
            trip_no: number;
            ticket_no: string;
            ticket_type: string;
            ticket_status: string;
            timestamp: Date;
            from_place: string;
            to_place: string;
            from_km: number;
            to_km: number;
            km_run: number;
            fare: number;
            card_no: string;
            status: string;
            lat: string;
            long: string;
            created_on: Date;
            updated_on: Date;
            previous_balance: number;
            current_balance: number;
            UUID?: string | undefined;
        }>;
        portalData: any[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    CreateTORTicket(torTicket: ITORTicket): Promise<boolean>;
    FindOneAndReplaceTORTicket(tor: ITORTicket): Promise<boolean>;
    FindUUID(UUID: string): Promise<false | undefined>;
}
declare const _default: TORTicketRepository;
export default _default;
