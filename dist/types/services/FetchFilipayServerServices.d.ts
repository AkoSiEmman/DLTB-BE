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
export declare function GetAllEmployee(): Promise<false | (import("mongoose").Document<unknown, {}, {
    fieldData: import("mongoose").Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
}> & Omit<{
    fieldData: import("mongoose").Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>)[] | undefined>;
export declare function AddNewEmployee(data: any): Promise<boolean>;
export declare function UpdateEmployee(id: string, data: any): Promise<boolean>;
