import { IDevice } from "../models/DeviceModel";
import DeviceRepository from "../repositories/DeviceRepository"

class DeviceService{

    async GetData(){
        try{
            
            const data = await DeviceRepository.GetAllData();

            return {status: 0, message: "OK", response: data}

        }catch(e){

            console.log(`Error in get all dispatch service: ${e}`)
            return {status: 0, message: e, response: {}}
        }
    }

    async AddData(data : IDevice){

        try{

            const newData = await DeviceRepository.AddData(data);

            return {status: 0, message: "OK", response: newData}
        }catch(e){
            console.log(`Error in adding vehicle: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }

}

export default new DeviceService();