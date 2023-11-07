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
import { IRemittance } from "../repositories/TORRemittanceRepository";
declare class TORRemittanceService {
    SyncGetAllRemittance(): Promise<any>;
    CreateTORRemittance(newTorRemittance: IRemittance): Promise<{
        status: number;
        message: unknown;
    }>;
    CreateTORRemittanceSync(newTorRemittance: IRemittance): Promise<{
        status: number;
        message: unknown;
    }>;
    GetAllTORRemittance(): Promise<false | (import("mongoose").Document<unknown, {}, {
        recordId: string;
        modId: string;
        fieldData: import("mongoose").Types.DocumentArray<{
            UUID: string;
            route: string;
            dateCreated: Date;
            device_id: string;
            control_no: string;
            tor_no: string;
            date_of_trip: Date;
            bus_no: string;
            route_code: string;
            remarks: string;
            bound: string;
            trip_no: number;
            timestamp: Date;
            lat: string;
            long: string;
            remittance_date: string;
            remittance_time: string;
            remittance_amount: number;
            remittance_type: string;
            ctr_no: string;
            waybill_ticket_no: string;
            cashier_emp_no: string;
            cashier_emp_name: string;
        }>;
        portalData?: any;
    }> & Omit<{
        recordId: string;
        modId: string;
        fieldData: import("mongoose").Types.DocumentArray<{
            UUID: string;
            route: string;
            dateCreated: Date;
            device_id: string;
            control_no: string;
            tor_no: string;
            date_of_trip: Date;
            bus_no: string;
            route_code: string;
            remarks: string;
            bound: string;
            trip_no: number;
            timestamp: Date;
            lat: string;
            long: string;
            remittance_date: string;
            remittance_time: string;
            remittance_amount: number;
            remittance_type: string;
            ctr_no: string;
            waybill_ticket_no: string;
            cashier_emp_no: string;
            cashier_emp_name: string;
        }>;
        portalData?: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    GenerateSession(): Promise<any>;
    EndSession(token: string | boolean): Promise<boolean>;
}
declare const _default: TORRemittanceService;
export default _default;
