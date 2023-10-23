import masterSchemaModel, { IMasterCard } from "../models/MasterCardModel";





class MasterCardRepository{

    async GetAllMasterCard(){

        try{

            const masterCard = masterSchemaModel.find({});

            return masterCard;

        }catch(e){
            console.error("Error in master card repository: "+e);
            return false;
        }
    }

    async CreateNewMasterCard(masterCard : IMasterCard){
        
        try{

            const newMasterCard = new masterSchemaModel(masterCard);

            const saveMasterCard = await newMasterCard.save();

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return e;
        }

    }

    async FindCardIdInMasterCard( cardId : string ) : Promise<IMasterCard | boolean | string> {
    
        try{

            const searchCardId : IMasterCard | null = await masterSchemaModel.findOne({ "cardId": cardId });


            if(searchCardId){
                return searchCardId;
            }else{
                return false;
            }


        }catch(e : any){
            console.log(`Error in repository ${e}`)

            let errorMessage: string = e.message;
            return errorMessage;
        }

    }

    async UpdateMasterCardBalanceByCardId( cardId : string, decreaseAmount : Number, increaseAmount : Number ){

        try{

            const increaseBalancePerId = await masterSchemaModel.updateOne({"cardId": cardId}, {$inc: {"balance": increaseAmount}} , {new: true});

            const decreaseBalancePerId = await  masterSchemaModel.updateOne({"cardId": cardId}, {$inc: {"balance": -decreaseAmount}} , {new: true});

            return decreaseBalancePerId;

        }catch(e){

            console.log(`Error in repository ${e}`);
            return e;

        }

    }



}

export default new MasterCardRepository();