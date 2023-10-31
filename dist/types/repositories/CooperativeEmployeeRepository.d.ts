import { ICooperativeEmployee } from "../models/CooperativeEmployeeModel";
declare class CooperativeEmployeeRepository {
    GetAllCooperativeEmployee(): Promise<unknown>;
    AddCooperativeEmployee(data: ICooperativeEmployee): Promise<unknown>;
}
declare const _default: CooperativeEmployeeRepository;
export default _default;
