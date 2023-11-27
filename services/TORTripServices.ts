import TORTripRepository, { ITrip } from "../repositories/TORTripRepository";

class TORTripServices{

    async AddNewTORTrip(tor : ITrip){

        try{
            console.log(tor)
            const newTORTrip = await TORTripRepository.AddNewTORTrip(tor);

            return {status: 0, message: "OK", response: newTORTrip}

        }catch(e){
            console.error("Error in trip services: "+e);
            return {status: 500, message: e};
        }

    }

    async GetAllTORTrip(){

        try{

            const allTorTrip = await TORTripRepository.GetAllTORTrip();

            return {status: 0, message: "OK", response: allTorTrip};

        }catch(e){
            console.error("Error in trip services: "+e);
            return {status: 500, message: e};
        }

    }

    async GetDataPerCoopId(coopId : string ){

        console.log(coopId)
        try{
            const data = await TORTripRepository.GetDataPerCoopId(coopId);

            
            if(data !== null){
                return {status: 0, message: "OK", response: data}
            }else{
                return {status: 1, message: "Invalid Coop Id", response: {}}
            }
            
        }catch(e){
            console.log(`Error in services ${e}`)
            return {status: 500, message: e, response: {}}
        }
    }


    async GetDataPerCoopIdAndDateRange(coopId : string, fromDate : string, toDate : string){
        try{

            const data = await TORTripRepository.GetDataPerCoopIdAndDateRange(coopId, fromDate, toDate)

            if(data !== null){
                return {status: 0, message: "OK", response: data}
            }else{
                return {status: 1, message: "Invalid Coop Id", response: {}}
            }

        }catch(e){
            console.error(`Error in services: ${e}`);
            return {status: 500, message: e, response: {}}
        }
    }

}

export default new TORTripServices();