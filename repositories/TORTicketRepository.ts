import TORTicketModel from "../models/TORTicketModel";

export interface ITORTicket{


        coopId: string,
        UUID: string,
        device_id: string,
        control_no : string,
        tor_no: string,
        date_of_trip: string,
        bus_no: string,
        route: string,
        route_code: string,
        bound: string,
        trip_no: number,
        ticket_no: string,
        ticket_type: string,
        ticket_status: string,
        timestamp: Date,
        from_place: string,
        to_place: string,
        from_km: number,
        to_km: number,
        km_run: number,
        fare: number,
        card_no: string,
        status: string,
        lat: string,
        long: string,
        created_on: Date,
        updated_on: Date,
        previous_balance: number,
        current_balance: number
   

}


class TORTicketRepository{

    async GetAllTORTicket(){

        try{

            const torTickets = await TORTicketModel.find({});

            return torTickets;
            
        }catch(e){
            console.error("Error in repository: "+e)
            return false;
        }

    }

    async CreateTORTicket(torTicket : ITORTicket){

        try{

            const newTorTicket = new TORTicketModel(torTicket);

            const saveTorTicket = await newTorTicket.save();

            return saveTorTicket;

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }

    async FindOneAndReplaceTORTicket(tor : any){

        try{

            const updateTORMain = await TORTicketModel.findOneAndReplace({"UUID" : tor.UUID} , tor, {upsert: true, new: true});

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }

    async FindUUID(UUID: string){

        try{

            const findTorTicket = await TORTicketModel.findOne({"fieldData.UUID" : UUID});

            console.log(findTorTicket)

            // return true

        }catch(e){
            console.error("Error in repository: "+e);
            return false;
        }

    }

    async GetDataPerCoopId(coopId : string){

        try{

            const data = await TORTicketModel.find({"coopId" : coopId})
            
            return data;

        }catch(e){
            console.log(`Error in repository : ${e}`);
            return null;
        }

    }


    
    async GetDataPerCoopIdAndDateRange(coopId : string, fromDate : string, toDate : string) {
        try {
            const data = await TORTicketModel.find({
                "coopId": coopId,
                "dateCreated": {
                    $gte: new Date(fromDate), // $gte means "greater than or equal to"
                    $lte: new Date(toDate)    // $lte means "less than or equal to"
                }
            });
    
            return data;
        } catch (e) {
            console.error(`Error in repository: ${e}`);
            return null;
        }
    }
    
}

export default new TORTicketRepository();