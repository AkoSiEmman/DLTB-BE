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
import { IEmployeeData } from "../models/EmployeeModel";
declare class EmployeeService {
    AddData(data: IEmployeeData): Promise<{
        status: number;
        message: string;
        response: boolean;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    GetDataPerCoopId(coopId: string): Promise<{
        status: number;
        message: string;
        response: boolean | (import("mongoose").Document<unknown, {}, {
            coopId: string;
            lastName: string;
            firstName: string;
            middleName: string;
            nameSuffix: string;
            empNo: number;
            empStatus: string;
            empType: string;
            idName: string;
            designation: string;
            idPicture: string;
            idSignature: string;
            JTI_RFID: string;
            accessPrivileges: string;
            JTI_RFID_RequestDate: string;
        }> & Omit<{
            coopId: string;
            lastName: string;
            firstName: string;
            middleName: string;
            nameSuffix: string;
            empNo: number;
            empStatus: string;
            empType: string;
            idName: string;
            designation: string;
            idPicture: string;
            idSignature: string;
            JTI_RFID: string;
            accessPrivileges: string;
            JTI_RFID_RequestDate: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: EmployeeService;
export default _default;
