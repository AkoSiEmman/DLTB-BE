import { IEmployeeCard } from "../repositories/EmployeeCardRepository";
declare class EmployeeCardService {
    GetAllEmployeeCard(): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
    RegisterNewEmployeeCard(newEmployeeCard: IEmployeeCard): Promise<{
        status: number;
        message: string;
        response: unknown;
    } | {
        status: number;
        message: unknown;
        response: {};
    }>;
}
declare const _default: EmployeeCardService;
export default _default;
