import StationModel, { IStation } from "../models/StationModel";

class StationRepository{

    async GetAllStation() : Promise<IStation[]>{
    
        try{

            const stations : any= await StationModel.find({});
            
            // stations.map(async (station : IStation) => {
               
            //     console.log(station)
                
            //     const updatedStation = await StationModel.findOneAndUpdate({_id : station.id} , station, {returnNewDocument: true});
            //   });

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

    async GetAllPerCoopId(coopId : string){

        try{

            const employee = await StationModel.find({'coopId' : coopId})

            return employee

        }catch(e){
           
            console.error("Repository error: "+e);
            return false;
            
        }

    }

}

export default new StationRepository();