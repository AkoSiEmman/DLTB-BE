import mongoose from "mongoose";
declare const TORRemittanceModel: mongoose.Model<{
    recordId: string;
    modId: string;
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
        dateCreated: Date;
        device_id: string;
        control_no: string;
        tor_no: string;
        date_of_trip: Date;
        bus_no: string;
        route_code: string;
        remarks: string;
        bound: string;
        trip_no: number;
        timestamp: Date;
        lat: string;
        long: string;
        remittance_date: string;
        remittance_time: string;
        remittance_amount: number;
        remittance_type: string;
        ctr_no: string;
        waybill_ticket_no: string;
        cashier_emp_no: string;
        cashier_emp_name: string;
    }>;
    portalData?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    recordId: string;
    modId: string;
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
        dateCreated: Date;
        device_id: string;
        control_no: string;
        tor_no: string;
        date_of_trip: Date;
        bus_no: string;
        route_code: string;
        remarks: string;
        bound: string;
        trip_no: number;
        timestamp: Date;
        lat: string;
        long: string;
        remittance_date: string;
        remittance_time: string;
        remittance_amount: number;
        remittance_type: string;
        ctr_no: string;
        waybill_ticket_no: string;
        cashier_emp_no: string;
        cashier_emp_name: string;
    }>;
    portalData?: any;
}> & Omit<{
    recordId: string;
    modId: string;
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
        dateCreated: Date;
        device_id: string;
        control_no: string;
        tor_no: string;
        date_of_trip: Date;
        bus_no: string;
        route_code: string;
        remarks: string;
        bound: string;
        trip_no: number;
        timestamp: Date;
        lat: string;
        long: string;
        remittance_date: string;
        remittance_time: string;
        remittance_amount: number;
        remittance_type: string;
        ctr_no: string;
        waybill_ticket_no: string;
        cashier_emp_no: string;
        cashier_emp_name: string;
    }>;
    portalData?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    recordId: string;
    modId: string;
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
        dateCreated: Date;
        device_id: string;
        control_no: string;
        tor_no: string;
        date_of_trip: Date;
        bus_no: string;
        route_code: string;
        remarks: string;
        bound: string;
        trip_no: number;
        timestamp: Date;
        lat: string;
        long: string;
        remittance_date: string;
        remittance_time: string;
        remittance_amount: number;
        remittance_type: string;
        ctr_no: string;
        waybill_ticket_no: string;
        cashier_emp_no: string;
        cashier_emp_name: string;
    }>;
    portalData?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    recordId: string;
    modId: string;
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
        dateCreated: Date;
        device_id: string;
        control_no: string;
        tor_no: string;
        date_of_trip: Date;
        bus_no: string;
        route_code: string;
        remarks: string;
        bound: string;
        trip_no: number;
        timestamp: Date;
        lat: string;
        long: string;
        remittance_date: string;
        remittance_time: string;
        remittance_amount: number;
        remittance_type: string;
        ctr_no: string;
        waybill_ticket_no: string;
        cashier_emp_no: string;
        cashier_emp_name: string;
    }>;
    portalData?: any;
}>> & Omit<mongoose.FlatRecord<{
    recordId: string;
    modId: string;
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
        dateCreated: Date;
        device_id: string;
        control_no: string;
        tor_no: string;
        date_of_trip: Date;
        bus_no: string;
        route_code: string;
        remarks: string;
        bound: string;
        trip_no: number;
        timestamp: Date;
        lat: string;
        long: string;
        remittance_date: string;
        remittance_time: string;
        remittance_amount: number;
        remittance_type: string;
        ctr_no: string;
        waybill_ticket_no: string;
        cashier_emp_no: string;
        cashier_emp_name: string;
    }>;
    portalData?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default TORRemittanceModel;
