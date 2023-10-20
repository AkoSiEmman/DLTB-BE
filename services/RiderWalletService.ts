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

}

export default new RiderWalletService()