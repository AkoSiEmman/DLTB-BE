import VehicleModel from "../models/VehicleModel";


export interface IVehicle{

    bus_no: String,

    plate_no: String,

}

class VehicleRepository{

    async GetAllVehicles(){

        try{

            const vehicles = await VehicleModel.find({})

            return vehicles;

        }catch(e){
            console.log(`Error in getting vehicles ${e}`)
            return e;
        }

    }

    async AddVehicle( vehicle : IVehicle ){

        try{

            const newVehicle = new VehicleModel(vehicle);

            const saveVehicle = await newVehicle.save();

            return saveVehicle;

        }catch(e){
            console.log(`Error in adding vehicle ${e}`);
            return e;
        }

    }

}

export default new VehicleRepository();