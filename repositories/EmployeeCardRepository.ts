import EmployeeCardModel from "../models/EmployeeCards"

export interface IEmployeeCard{
    
    employeeId : String,
    cardId : String, 

}

class EmployeeCardRepository{

    async GetAllEmployeeCard(){

        try{

            const employeeCards = EmployeeCardModel.find({});

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

export default new EmployeeCardRepository;