import mongoose from "mongoose";
declare const TORViolationModel: mongoose.Model<{
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
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
        inspector_emp_no: string;
        inspector_emp_name: string;
        onboard_time: string;
        onboard_place: string;
        onboard_km_post: number;
        ticket_no_beginning: string;
        ticket_no_ending: string;
        passenger_count_paid: string;
        passenger_count_with_pass: string;
        passenger_count_transfer: string;
        passenger_count_total: number;
        actual_count: number;
        total_discrepancy: number;
        offboard_time: string;
        offboard_place: string;
        offboard_km_post: string;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
    portalId?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
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
        inspector_emp_no: string;
        inspector_emp_name: string;
        onboard_time: string;
        onboard_place: string;
        onboard_km_post: number;
        ticket_no_beginning: string;
        ticket_no_ending: string;
        passenger_count_paid: string;
        passenger_count_with_pass: string;
        passenger_count_transfer: string;
        passenger_count_total: number;
        actual_count: number;
        total_discrepancy: number;
        offboard_time: string;
        offboard_place: string;
        offboard_km_post: string;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
    portalId?: any;
}> & Omit<{
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
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
        inspector_emp_no: string;
        inspector_emp_name: string;
        onboard_time: string;
        onboard_place: string;
        onboard_km_post: number;
        ticket_no_beginning: string;
        ticket_no_ending: string;
        passenger_count_paid: string;
        passenger_count_with_pass: string;
        passenger_count_transfer: string;
        passenger_count_total: number;
        actual_count: number;
        total_discrepancy: number;
        offboard_time: string;
        offboard_place: string;
        offboard_km_post: string;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
    portalId?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
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
        inspector_emp_no: string;
        inspector_emp_name: string;
        onboard_time: string;
        onboard_place: string;
        onboard_km_post: number;
        ticket_no_beginning: string;
        ticket_no_ending: string;
        passenger_count_paid: string;
        passenger_count_with_pass: string;
        passenger_count_transfer: string;
        passenger_count_total: number;
        actual_count: number;
        total_discrepancy: number;
        offboard_time: string;
        offboard_place: string;
        offboard_km_post: string;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
    portalId?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
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
        inspector_emp_no: string;
        inspector_emp_name: string;
        onboard_time: string;
        onboard_place: string;
        onboard_km_post: number;
        ticket_no_beginning: string;
        ticket_no_ending: string;
        passenger_count_paid: string;
        passenger_count_with_pass: string;
        passenger_count_transfer: string;
        passenger_count_total: number;
        actual_count: number;
        total_discrepancy: number;
        offboard_time: string;
        offboard_place: string;
        offboard_km_post: string;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
    portalId?: any;
}>> & Omit<mongoose.FlatRecord<{
    fieldData: mongoose.Types.DocumentArray<{
        UUID: string;
        route: string;
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
        inspector_emp_no: string;
        inspector_emp_name: string;
        onboard_time: string;
        onboard_place: string;
        onboard_km_post: number;
        ticket_no_beginning: string;
        ticket_no_ending: string;
        passenger_count_paid: string;
        passenger_count_with_pass: string;
        passenger_count_transfer: string;
        passenger_count_total: number;
        actual_count: number;
        total_discrepancy: number;
        offboard_time: string;
        offboard_place: string;
        offboard_km_post: string;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
    portalId?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default TORViolationModel;
