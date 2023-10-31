import { ICooperativeEmployee } from "../models/CooperativeEmployeeModel";
import CooperativeEmployeeRepository from "../repositories/CooperativeEmployeeRepository";

class CooperativeEmployeeService{

    async GetAllCooperativeEmployee(){

        try{

            const allCooperativeEmployee = await CooperativeEmployeeRepository.GetAllCooperativeEmployee();

            return {status: 0, message: "OK", response: allCooperativeEmployee}

        }catch(e){

            console.log(`Error in getting vehicle services: ${e}`)

            return {status: 500, message: e, response: {}}

        }

    }

    async AddCooperativeEmployee(data: ICooperativeEmployee){

        try{

            const newEmployee = await CooperativeEmployeeRepository.AddCooperativeEmployee(data);

            return {status: 0, message: "OK", response: newEmployee}

        }catch(e){

            console.log(`Error in getting vehicle services: ${e}`)

            return {status: 500, message: e, response: {}}


        }

    }


}

export default new CooperativeEmployeeService();