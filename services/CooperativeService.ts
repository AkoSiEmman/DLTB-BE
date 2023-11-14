import { ICooperative } from "../models/CooperativeModel";
import CooperativeRepository from "../repositories/CooperativeRepository";


class CooperativeService{

    async GetData(){

        try{
            
            const data = await CooperativeRepository.GetAllData();

            return {status: 0, message: "OK", response: data}

        }catch(e){

            console.log(`Error in get all service: ${e}`)
            return {status: 0, message: e, response: {}}
        }

    }


    async AddData(data : ICooperative){

        try{

            const newData = await CooperativeRepository.AddData(data);

            return {status: 0, message: "OK", response: newData}
        }catch(e){
            console.log(`Error in adding service: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }

}

export default new CooperativeService()