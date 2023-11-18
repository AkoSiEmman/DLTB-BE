import { IMasterCard } from "../models/MasterCardModel";
import MasterCardRepository from "../repositories/MasterCardRepository";
import RiderRepository from "../repositories/RiderRepository";
import RiderWalletRepository, { IRiderWallet } from "../repositories/RiderWalletRepository";


class RiderWalletService {

    async GetAllRiderWallet(){

        try{

            const riderWallets = await RiderWalletRepository.GetAllRiderWallet();

            return {status: 0, message: "OK", response: riderWallets}
        }catch(e){
            console.log(`Error in rider wallet services: ${e}`);

            return {status: 500, message: e, response: {}}
        }

    }

    async AddRiderWallet( riderWallet : IRiderWallet ){

        try{
            
            const newRiderWallet = await RiderWalletRepository.AddRiderWallet(riderWallet)

            return {status: 0, message: "OK", response: newRiderWallet}
        }catch(e){
            console.log(`Error in rider wallet services: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }

    isMasterCard(card: IMasterCard | string | boolean): card is IMasterCard {
        return (card as IMasterCard).balance !== undefined;
    }

    isRiderCard(card: IRiderWallet | string | boolean): card is IRiderWallet {
        return (card as IRiderWallet).balance !== undefined;
    }

    async UpdateRiderWalletByCardId( cardId : string, decreaseAmount : number, increaseAmount : number, cardType : String ){

        try{

            if(cardId !== undefined  && decreaseAmount !== null && increaseAmount !== null && cardType !== undefined ){

                
                if(cardType === "mastercard"){
                
                    const findCardIdInMasterCard : IMasterCard | string | boolean = await MasterCardRepository.FindCardIdInMasterCard(cardId);



                    if(this.isMasterCard(findCardIdInMasterCard) && findCardIdInMasterCard.balance >= 0){

                        if(this.isMasterCard(findCardIdInMasterCard) && findCardIdInMasterCard.balance >= decreaseAmount){
                        
                            const updateBalance = await MasterCardRepository.UpdateMasterCardBalanceByCardId(cardId, decreaseAmount, increaseAmount);

                            const newBalance : number = await findCardIdInMasterCard.balance;
                            return {status: 0, message: "OK", response: {
                                "previousBalance" : findCardIdInMasterCard.balance,
                                "newBalance" : newBalance
                            }}

                        }else{

                            return {status: 1, message: "Insufficient balance", response: {}}

                        }

                        
                    }else{
                        return {status: 1, message: "Card is not yet registered", response: {}}
                    }

                }

                if(cardType === "discounted" || cardType === "regular"){
                    
                   

                    const riderIdPerCardId : any = await RiderRepository.GetRiderByCardId(cardId);  

                    
                  
                    if(riderIdPerCardId[0]._id !== undefined ){

                        let riderId : string = riderIdPerCardId[0]._id.toString();

                        console.log("rider id ito : "+ riderId)

                        if(cardType === "discounted" && riderIdPerCardId[0].sNo.substring(0, 3).toUpperCase() !== "SND"){
                            return {status: 1, message: "Card is not valid", response: {}}
                        }

                        if(cardType === "regular" && riderIdPerCardId[0].sNo.substring(0, 3).toUpperCase() !== "SNR"){
                            return {status: 1, message: "Card is not valid", response: {}}
                        }

                        const getBalancePerRiderId : number = await RiderWalletRepository.GetBalancePerRiderId(riderId);

                        if(getBalancePerRiderId >= decreaseAmount && getBalancePerRiderId !== undefined){
                            const updateBalancePerRiderId = await RiderWalletRepository.
                            UpdateRiderWalletByRiderId(riderId, increaseAmount, decreaseAmount);

                            const newBalancePerRiderId : number = await RiderWalletRepository.GetBalancePerRiderId(riderId);
                            
                            return {status: 0, message: `Rider ${riderId} balance has been updated`, response: {
                                "previousBalance" : getBalancePerRiderId,
                                "newBalance" : newBalancePerRiderId
                            }}

                        }else{
                            return {status: 1, message: "Invalid amount", response: {}}

                        }
                    }else{
                        console.log("PUMASOK DITO")
                        return {status: 1, message: "Card is not valid", response: {}}
                    }
                
                }

                return {status: 1, message: "Card is not valid", response: {}}

            }else{
                return {status: 1, message: "Invalid fields", response: {}}
            }
            
           
        }catch(e){
            console.log(`Error in rider wallet services: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }
    

    async GetRiderWalletCardIdPerId( cardId : string){

        try{


            const FindCardInRiderWallet = await RiderWalletRepository.FindCardInRiderWallet(cardId);

            if(this.isRiderCard(FindCardInRiderWallet)){
                return {status: 0, message: "OK", response: FindCardInRiderWallet}
            }else{
                return {status: 1, message: "Card does not exist", response: {}}
            }

        }catch(e){
            console.log(`Error in rider wallet services: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }

}

export default new RiderWalletService()