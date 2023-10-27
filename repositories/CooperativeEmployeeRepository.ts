import CooperativeEmployeeModel, { ICooperativeEmployee } from "../models/CooperativeModel";

class CooperativeEmployeeRepository{

    async GetAllCooperativeEmployee(){
    
        try{

            const result = await CooperativeEmployeeModel.find({});

            return result;

        }catch(e){
            console.log(`Error in repository: ${e}`)

            return e;
        }

    }

    async AddCooperativeEmployee(data: ICooperativeEmployee){

        try{

            const employee = new CooperativeEmployeeModel(data);

            return await employee.save();

        }catch(e){
            console.log(`Error in repository: ${e}`);
            return e;
        }

    }

}

export default new CooperativeEmployeeRepository();