import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import { directionRepo } from "../repositories/DirectionRepository";

export async function GetAllDirectionsController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();
    
    try{

        const directions = await directionRepo.GetAllDirections();

        // console.log(directions[])

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
            response: directions
        });


    }catch(e){
        console.error("Error in controller");
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting all directions: "+e,
            dateTime: responseDate,
        }]})
    }

}

export async function AddNewDirectionController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newDirection = await directionRepo.AddNewDirection(request.body);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
            response:{}
        });
       

    }catch(e){
        console.error("Error in controller");
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting all directions: "+e,
            dateTime: responseDate,
        }]})
    }

}


export async function GetAllDirectionPerCoopIdController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();
    
    try{

        const directions = await directionRepo.GetAllPerCoopId(request.params.id);

        console.log(directions);

        if(directions === null){
            response.status(200).json({messages : [{
                code: "1",
                message: "Invalid coop id",
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
            response: directions
            });
        }
         
    


    }catch(e){
        console.error("Error in controller");
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting all directions: "+e,
            dateTime: responseDate,
        }]})
    }

}