import EmployeeCardModel from "../models/EmployeeCards"

export interface IEmployeeCard{
    coopId: String,
    empNo : String,
    cardId : String, 

}

class EmployeeCardRepository{

    async GetAllEmployeeCard(){

        try{

            const employeeCards = await EmployeeCardModel.find({});

            // employeeCards.map(async (station : any) => {
               
            //     const updatedStation = await EmployeeCardModel.findOneAndUpdate({_id : station.id} , station, {returnNewDocument: true});
                
            // });

            return employeeCards;

        }catch(e){
            console.error("Error in employee repository: "+e)
            return e
        }

    }

    async GetAllDatPerCoopId(coopId : string){
        try{

            const employeeCards = await EmployeeCardModel.find({"coopId" : coopId});

            // employeeCards.map(async (station : any) => {
               
            //     const updatedStation = await EmployeeCardModel.findOneAndUpdate({_id : station.id} , station, {returnNewDocument: true});
                
            // });

            return employeeCards;

        }catch(e){
            console.error("Error in employee repository: "+e)
            return e
        }
    }

    async RegisterEmployeeCard( employeeCard : IEmployeeCard){


        try{

            const newEmployeeCard = new EmployeeCardModel(employeeCard);

            const saveNewEmployeeCard = await newEmployeeCard.save();
            
            return saveNewEmployeeCard;
            
        }catch(e){
            console.error("Error in employee repository: "+e)
            return e
        }

    }
  

}

export default new EmployeeCardRepository();