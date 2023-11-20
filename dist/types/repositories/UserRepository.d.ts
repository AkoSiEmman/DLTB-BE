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
import { IUser } from "../models/UserModel";
declare class UserRepository {
    GetAllUser(): Promise<unknown>;
    GetUserById(id: String): Promise<unknown>;
    AddUser(newUser: IUser): Promise<unknown>;
    CheckIfEmailExist(email: string): Promise<unknown>;
    GetUserPasswordByEmail(email: string): Promise<unknown>;
    UpdateUser(id: string, user: IUser): Promise<unknown>;
    GetUserByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, {
        password: string;
        lastName: string;
        firstName: string;
        middleName: string;
        profileImageUrl: string;
        email: string;
        company: string;
        isEmailVerified: boolean;
        isAllowedToTorMain: boolean;
        isAllowedToTorTicket: boolean;
        isAllowedToTorFuel: boolean;
        isAllowedToTorRemittance: boolean;
        isAllowedToTorTrip: boolean;
        isAllowedToTorInspection: boolean;
        isAllowedToTorViolation: boolean;
        isAllowedToTorTrouble: boolean;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }> & Omit<{
        password: string;
        lastName: string;
        firstName: string;
        middleName: string;
        profileImageUrl: string;
        email: string;
        company: string;
        isEmailVerified: boolean;
        isAllowedToTorMain: boolean;
        isAllowedToTorTicket: boolean;
        isAllowedToTorFuel: boolean;
        isAllowedToTorRemittance: boolean;
        isAllowedToTorTrip: boolean;
        isAllowedToTorInspection: boolean;
        isAllowedToTorViolation: boolean;
        isAllowedToTorTrouble: boolean;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null>;
}
declare const _default: UserRepository;
export default _default;
