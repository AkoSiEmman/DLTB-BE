import DeviceModel, { IDevice } from "../models/DeviceModel";

class DeviceRepository{

    async GetAllData(){

        try{

            const data = DeviceModel.find({});

            return data;

        }catch(e){
            console.error("Error in direction repository: "+e)
            return false;
        }

    }

    async AddData(data : IDevice){

        try{

            const newData = new DeviceModel(data);

            return await newData.save();

        }catch(e){
            console.error("Error in direction repository: "+e)
            return false;
        }

    }

}

export default new DeviceRepository();