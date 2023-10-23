import { IDispatch } from "../repositories/DispatchRepository";
declare class DispatchService {
    GetAllDispatch(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddDispatch(newDispatch: IDispatch): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: DispatchService;
export default _default;
