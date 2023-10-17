import  EmployeeCardRepository, { IEmployeeCard } from "../repositories/EmployeeCardRepository";


class EmployeeCardService{

    async GetAllEmployeeCard(){

        try{
            
            const allEmployeeCard = await EmployeeCardRepository.GetAllEmployeeCard();

            return {status: 0, message: "OK", response: allEmployeeCard}
    

        }catch(e){

            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}

        }

    }

    async RegisterNewEmployeeCard( newEmployeeCard : IEmployeeCard){

        try{

            const saveNewEmployeeCard = await EmployeeCardRepository.RegisterEmployeeCard(newEmployeeCard);

            return {status: 0, message: "OK", response: saveNewEmployeeCard}

        }catch(e){

            console.error("Error in tor services: "+e);
            return {status: 500, message: e, response: {}}

        }

    }

}

export default new EmployeeCardService();