import { ITrouble } from "../repositories/TORTroubleRepository";
declare class TORTroubleServices {
    GetAllTOR(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    CreateTOR(tor: ITrouble): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: TORTroubleServices;
export default _default;
