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
    GetAllDataPerCoopId(coopId: string): Promise<{
        status: number;
        message: string;
        response: boolean | (import("mongoose").Document<unknown, {}, {
            coopId: string;
            createdAt: Date;
            updatedAt: Date;
            stationName: string;
            km: number;
            viceVersaKM: number;
            routeId: import("mongoose").Types.ObjectId;
        }> & Omit<{
            coopId: string;
            createdAt: Date;
            updatedAt: Date;
            stationName: string;
            km: number;
            viceVersaKM: number;
            routeId: import("mongoose").Types.ObjectId;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: StationService;
export default _default;
