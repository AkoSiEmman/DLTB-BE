import { ICooperativeEmployee } from "../models/CooperativeEmployeeModel";
declare class CooperativeEmployeeService {
    GetAllCooperativeEmployee(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    AddCooperativeEmployee(data: ICooperativeEmployee): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: CooperativeEmployeeService;
export default _default;
