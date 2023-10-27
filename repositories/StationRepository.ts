import StationModel, { IStation } from "../models/StationModel";

class StationRepository{

    async GetAllStation() : Promise<IStation[]>{
    
        try{

            const stations : any= await StationModel.find({});
            return stations;

        }catch(e : any ){
            return e;
        }

    }

    async AddStation( newStation : IStation){
    
        try{

            const station = new StationModel(newStation);

            return await station.save();

        }catch(e : any ){
            return e;
        }

    }

}

export default new StationRepository();