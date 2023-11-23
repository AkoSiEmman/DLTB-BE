import masterCardModel, { IMasterCard } from "../models/MasterCardModel";





class MasterCardRepository{

    async GetAllMasterCard(){

        try{

            const masterCard : any = await masterCardModel.find({});

            return masterCard;

        }catch(e){
            console.error("Error in master card repository: "+e);
            return false;
        }
    }

    async GetCardByCoopId(coopId: string){
        try{
            const update = await this.UpdateField();
            const masterCard : any = await masterCardModel.find({"coopId" : coopId});

            return masterCard;

        }catch(e){
            console.error("Error in master card repository: "+e);
            return false;
        }
    }

    async CreateNewMasterCard(masterCard : IMasterCard){
        
        try{

            const newMasterCard = new masterCardModel(masterCard);

            const saveMasterCard = await newMasterCard.save();

            return true;

        }catch(e){
            console.error("Error in repository: "+e);
            return e;
        }

    }

    async FindCardIdInMasterCard( cardId : string ) : Promise<IMasterCard | boolean | string> {
    
        try{

            const searchCardId : IMasterCard | null = await masterCardModel.findOne({ "cardId": cardId });


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

    async GetCurrentBalancePerCardId( cardId : string ){

        try{

            const searchCardId : IMasterCard | null = await masterCardModel.findOne({ "cardId": cardId });


            if(searchCardId){
                return searchCardId.balance;
            }else{
                return null;
            }


        }catch(e : any){
            console.log(`Error in repository ${e}`)

            let errorMessage: string = e.message;
            return null;
        }

    }

    async UpdateMasterCardBalanceByCardId( cardId : string, decreaseAmount : Number, increaseAmount : Number ){

        try{
            console.log(`INCREASE ${increaseAmount}`)
            console.log(`DECREASE ${decreaseAmount}`)

            const increaseBalancePerId = await masterCardModel.updateOne({"cardId": cardId}, {$inc: {"balance": increaseAmount}} , {new: true});

            const decreaseBalancePerId = await  masterCardModel.updateOne({"cardId": cardId}, {$inc: {"balance": -decreaseAmount}} , {new: true});

            return true;

        }catch(e){

            console.log(`Error in repository ${e}`);
            return e;

        }

    }

    async  UpdateField() {
        try {
          await masterCardModel.updateMany({}, { $rename: { 'cardId': 'cardID' } });
          console.log('Field updated successfully.');
        } catch (error) {
          console.error('Error updating field:', error);
        }
      }


}

export default new MasterCardRepository();