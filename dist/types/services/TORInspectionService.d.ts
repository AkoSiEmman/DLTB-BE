import { IInspection } from "../repositories/TORInspectionRepository";
declare class TORInspectionService {
    GetAllTORInspection(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    CreateTORInspection(torInspection: IInspection): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: TORInspectionService;
export default _default;
