export interface IDispatch {
    coopName: String;
    designation: String;
    torNo: String;
    otNo: String;
    atm: String;
    date: Date;
    tripNo: String;
    bound: String;
    route: String;
    driverName: String;
    conductorName: String;
    dispatcherName: String;
    trip: String;
}
declare class DispatchRepository {
    AddDispatch(newDispatch: IDispatch): Promise<unknown>;
    GetAllDispatch(): Promise<unknown>;
}
declare const _default: DispatchRepository;
export default _default;
