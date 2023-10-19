import EmployeeCardModel from "../models/EmployeeCards"

export interface IEmployeeCard{
    
    empNo : String,
    cardId : String, 

}

class EmployeeCardRepository{

    async GetAllEmployeeCard(){

        try{

            const employeeCards = await EmployeeCardModel.find({});

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