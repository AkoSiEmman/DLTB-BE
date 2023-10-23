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
export interface IMasterCard {
    cardId: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}
declare class MasterCardRepository {
    GetAllMasterCard(): Promise<false | (import("mongoose").Document<unknown, {}, {
        cardId: string;
        createdAt: Date;
        updatedAt: Date;
        balance: number;
    }> & {
        cardId: string;
        createdAt: Date;
        updatedAt: Date;
        balance: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    CreateNewMasterCard(masterCard: IMasterCard): Promise<unknown>;
    FindCardIdInMasterCard(cardId: string): Promise<unknown>;
    UpdateMasterCardBalanceByCardId(cardId: string, decreaseAmount: Number, increaseAmount: Number): Promise<unknown>;
}
declare const _default: MasterCardRepository;
export default _default;
