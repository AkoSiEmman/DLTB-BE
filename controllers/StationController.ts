import {Request, Response}  from 'express';
import { GetCurrentDateSTR } from '../common/GetCurrentDate';
import StationService from '../services/StationService';

export async function GetAllStationController (request: Request, response: Response){

    try{

        const allStations = await StationService.GetAllStation();

        if(allStations.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR,
                }],
                response : allStations.response
            })
        }else{
            response.status(201).json({messages : [{
                code: allStations.status,
                message: allStations.message,
                dateTime: GetCurrentDateSTR,
                }],
                response: allStations.response
            })
        }

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: GetCurrentDateSTR,
            }],
            response: {}
        })
    }

}

export async function AddStationController( request: Request, response: Response ){

    try{

        const newStation = await StationService.AddStation(request.body);

        if(newStation.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR,
                }],
                response : newStation.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newStation.status,
                message: newStation.message,
                dateTime: GetCurrentDateSTR,
                }],
                response: newStation.response
            })
        }

    }catch(e){
        
        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: GetCurrentDateSTR,
            }],
            response: {}
        })
    }

}

export async function GetAllStationPerCoopIdController(request : Request, response : Response){

try{
    const data = await StationService.GetAllDataPerCoopId(request.params.id);
       
    if(Object(data.response).length === 0){
        response.status(200).json({messages : [{
            code: "1",
            message: "Invalid Coop Id",
            dateTime: GetCurrentDateSTR(),
        }],
        response: {}
        });
    }else{
      

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: GetCurrentDateSTR(),
        }],
        response: data.response
        });
    }

   

}catch(e){
    response.status(500).json({messages : [{
        code: "212",
        message: "Error in getting all employees: "+e,
        dateTime: GetCurrentDateSTR(),
    }],
    response:{}
});
}

}