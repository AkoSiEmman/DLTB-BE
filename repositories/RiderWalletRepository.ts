import RiderWalletModel from "../models/RiderWalletModel";

export interface IRiderWallet{

    // _id : String,

    riderId: String,

    currencyId: String,

    address: String,

    privateKey: String,

    balance: Number

}


class RiderWalletRepository{

    async GetAllRiderWallet(){

        try{

            const riderWallets = await RiderWalletModel.find({});

            console.log(riderWallets)

            return riderWallets;

        }catch(e){
            
            console.log(`Error in repository ${e}`);

            return e

        }

    }

    async AddRiderWallet( riderWallet : IRiderWallet ){

        try{

            const newRiderWallet = new RiderWalletModel(riderWallet);

            const saveNewRiderWallet = await newRiderWallet.save();

            return saveNewRiderWallet;

        }catch(e){
            console.log(`Error in repository ${e}`)
            return e
        }

    }

}

export default new RiderWalletRepository()