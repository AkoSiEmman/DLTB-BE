import { IEmployeeData } from "../models/EmployeeModel";
import { employeeRepo } from "../repositories/EmployeeRepository";

class EmployeeService{

    async AddData(data : IEmployeeData){

        
        try{
            
            const newData = await employeeRepo.AddEmployee(data);

            return {status: 0, message: "OK", response: newData}

        }catch(e){

            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}

        }


    }

    async GetDataPerCoopId(coopId : string){
        try{

            const data = await employeeRepo.GetAllPerCoopId(coopId);

            return {status: 0, message: "OK", response: data}

        }catch(e){
            console.error("Error in services: "+e);
            return {status: 500, message: e, response: {}}
        }
    }
}

export default new EmployeeService();