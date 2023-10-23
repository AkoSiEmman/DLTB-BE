import { IViolation } from "../repositories/TORViolationRepository";
declare class TORViolationService {
    GetAllTOR(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    CreateTOR(tor: IViolation): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: TORViolationService;
export default _default;
