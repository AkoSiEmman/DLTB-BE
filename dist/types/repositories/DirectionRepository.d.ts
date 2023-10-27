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
interface IDirections {
    bound: string;
    origin: string;
    destination: string;
    route_code: string;
}
declare class Directions {
    GetAllDirections(): Promise<false | (import("mongoose").Document<unknown, {}, {
        createdAt: Date;
        updatedAt: Date;
        route_code: string;
        bound: string;
        origin: string;
        destination: string;
    }> & Omit<{
        createdAt: Date;
        updatedAt: Date;
        route_code: string;
        bound: string;
        origin: string;
        destination: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    AddNewDirection(direction: IDirections): Promise<boolean>;
}
export declare const directionRepo: Directions;
export {};
