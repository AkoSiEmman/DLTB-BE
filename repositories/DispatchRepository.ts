import DispatchModel from "../models/DispatchModel"


export interface IDispatch {

    coopName : String,
    designation : String,
    torNo : String,
    otNo : String,
    atm : String,
    date : Date,
    tripNo : String,
    bound : String,
    route : String,
    driverName : String,
    conductorName : String,
    dispatcherName : String,
    trip : String

}

class DispatchRepository{

    async AddDispatch( newDispatch : IDispatch ){

        try{

            const dispatch = new  DispatchModel(newDispatch);

            return dispatch;

        }catch(e){
            console.log(`Error in add dispatch repository: ${e}`)
            return e
        }

    }

    async GetAllDispatch(){

        try{

            const allDispatch = await DispatchModel.find({});

            return allDispatch;

        }catch(e){
            console.log(`Error in getting dispatch repository: ${e}`)
            return e
        }

    }

}

export default new DispatchRepository();