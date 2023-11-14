import CooperativeModel, { ICooperative } from "../models/CooperativeModel";

class CooperativeRepository{

    async GetAllData(){
        try{

            const data = await CooperativeModel.find({});

            return data;

        }catch(e){

            console.error("Error in direction repository: "+e)
            return false;

        }
    }

    async AddData(data : ICooperative){

        try{

            const newData = new CooperativeModel(data);

            return await newData.save();

        }catch(e){

            console.error("Error in direction repository: "+e)
            return false;

        }

    }

}

export default new CooperativeRepository()