import mongoose from "mongoose";
declare const EmployeeModel: mongoose.Model<{
    fieldData: mongoose.Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    fieldData: mongoose.Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
}> & {
    fieldData: mongoose.Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    fieldData: mongoose.Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    fieldData: mongoose.Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
}>> & mongoose.FlatRecord<{
    fieldData: mongoose.Types.DocumentArray<{
        lastName: string;
        firstName: string;
        empNo: number;
        idName: string;
        middleName?: string | undefined;
        nameSuffix?: string | undefined;
        empStatus?: string | undefined;
        empType?: string | undefined;
        designation?: string | undefined;
        idPicture?: string | undefined;
        idSignature?: string | undefined;
        JTI_RFID?: string | undefined;
        accessPrivileges?: string | undefined;
        JTI_RFID_RequestDate?: string | undefined;
    }>;
    recordId?: string | undefined;
    modId?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default EmployeeModel;
