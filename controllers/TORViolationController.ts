import { Request, Response } from "express";
import { GetCurrentDate, GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORViolationService from "../services/TORViolationService";

export async function GetAllTorViolationController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    
    try{

        const tors = await TORViolationService.GetAllDataPerCoopId(request.params.id)

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: tors.response
        })


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

export async function CreateNewTorViolationController(request: Request, response :Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newTOR = await TORViolationService.CreateTOR(request.body);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: newTOR.response
        })
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



export async function GetTORViolationPerCoopIdController(request : Request, response : Response){
try{

        const data = await TORViolationService.CreateTOR(request.body);

            response.status(200).json({messages : [{
                code: data.status,
                message: data.message,
                dateTime: GetCurrentDateSTR(),
                }],
                response: data.response
            })
        

    }catch(e){
        console.error("Error in controller: "+e);
        response.status(500).json({messages : [{
            code: "500",
            message: "Internal Server Error: "+e,
            dateTime: GetCurrentDateSTR(),
            }],
            response: {}
        })
    }
}