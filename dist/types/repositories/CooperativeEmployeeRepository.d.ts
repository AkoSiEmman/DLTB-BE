import { ICooperativeEmployeeSchema } from "../models/CooperativeEmployeeModel";
declare class CooperativeEmployeeRepository {
    GetAllCooperativeEmployee(): Promise<unknown>;
    AddCooperativeEmployee(data: ICooperativeEmployeeSchema): Promise<unknown>;
}
declare const _default: CooperativeEmployeeRepository;
export default _default;
