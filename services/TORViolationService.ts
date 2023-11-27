import TORViolationRepository, { ITORViolation, IViolation } from "../repositories/TORViolationRepository";


class TORViolationService{


  async GetAllTOR(){

        
        try{

        const allTOR = await TORViolationRepository.GetAllTorViolation();

        return {status: 0, message: "OK", response: allTOR}

        }catch(e){
            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}
        }

    }

    async CreateTOR(tor : IViolation){

        try{

            const saveNewTor = await TORViolationRepository.CreateTORViolation(tor);

            return {status: 0, message: "OK", response: saveNewTor}
          

        }catch(e){
            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}
        }

    }
    async GetAllDataPerCoopId(coopId : string){

        try{

            const data = await TORViolationRepository.GetDataPerCoopId(coopId);

            
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

export default new TORViolationService();