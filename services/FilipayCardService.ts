import { IRider } from "../models/RiderModel";
import EmployeeCardRepository, { IEmployeeCard } from "../repositories/EmployeeCardRepository";
import RiderRepository from "../repositories/RiderRepository";
import RiderWalletRepository from "../repositories/RiderWalletRepository";

export interface IFilipayCard{

   _id: string,
   cardID: string,
   balance: number,
   cardType: string,

}

class FilipayCardService{

    async GetAllData() {
        try {
            const employeeCards = await EmployeeCardRepository.GetAllEmployeeCard();
    
            if (Object(employeeCards).length !== 0 && employeeCards !== null) {
                const cards: any[] = [];
    
                await Promise.all(
                    employeeCards.map(async (card: any) => {
                        let newCard = {
                            "_id": "",
                            "cardId": "",
                            "balance": 0,
                            "cardType": "regular"
                        };
    
                        const registeredRiders = await RiderRepository.GetRiderByCardId(card.cardId);
    
                        if (registeredRiders !== null && registeredRiders.balance !== undefined) {
                            const getData: any = await RiderWalletRepository.GetRiderWalletByRiderId(registeredRiders._id);
    
                            if (Object(getData).length > 0) {
                                if (registeredRiders.sNo.startsWith("SND")) {
                                    newCard = {
                                        "_id": card._id,
                                        "cardId": card.cardId,
                                        "balance": parseFloat(getData.balance),
                                        "cardType": "discounted"
                                    };
                                }
    
                                if (registeredRiders.sNo.startsWith("SNR")) {
                                    newCard = {
                                        "_id": card._id,
                                        "cardId": card.cardId,
                                        "balance": parseFloat(getData.balance),
                                        "cardType": "regular"
                                    };
                                }
                            }
                        }
    
                        cards.push(newCard);
                    })
                );
    
                return { status: 0, message: "OK", response: cards };
            }
        } catch (e) {
            console.log(`Error in get all services: ${e}`);
            return { status: 500, message: e, response: {} };
        }
    }
    

}

export default new FilipayCardService();