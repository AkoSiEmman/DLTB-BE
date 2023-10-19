import {Request, Response} from 'express'
import { GetCurrentDate, GetCurrentDateSTR } from '../common/GetCurrentDate'
import VehicleServices from '../services/VehicleServices';

export async function GetAllVehicleController(request : Request, response : Response){

    const responseDate = GetCurrentDate();

        try{

            const vehicles = await VehicleServices.GetAllVehicle();

            if(vehicles.status === 0 ){
                response.status(200).json({messages : [{
                    code: "0",
                    message: "OK",
                    dateTime: responseDate,
                    }],
                    response : vehicles.response
                })
            }else{
                response.status(201).json({messages : [{
                    code: vehicles.status,
                    message: vehicles.message,
                    dateTime: responseDate,
                    }],
                    response: vehicles.response
                })
            }

        }catch(e){
            
            console.error("Error in controller: "+e);
            response.status(500).json({messages : [{
                code: "1",
                message: ""+e,
                dateTime: responseDate,
                }],
                response: {}
            })

        }

}

export async function AddVehicleController(request : Request, response : Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newVehicle = await VehicleServices.AddVehicle(request.body);

        if(newVehicle.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response : newVehicle.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newVehicle.status,
                message: newVehicle.message,
                dateTime: responseDate,
                }],
                response: newVehicle.response
            })
        }

    }catch(e){

        console.error("Error in controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}