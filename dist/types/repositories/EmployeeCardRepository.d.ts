export interface IEmployeeCard {
    coopId: String;
    empNo: String;
    cardId: String;
}
declare class EmployeeCardRepository {
    GetAllEmployeeCard(): Promise<unknown>;
    GetAllDatPerCoopId(coopId: string): Promise<unknown>;
    RegisterEmployeeCard(employeeCard: IEmployeeCard): Promise<unknown>;
}
declare const _default: EmployeeCardRepository;
export default _default;
