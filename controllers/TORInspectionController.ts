import { Request, Response } from "express"
import { GetCurrentDateSTR } from "../common/GetCurrentDate"
import TORInspectionService from "../services/TORInspectionService";


export async function GetAllTORInspectionController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const torInspections = await TORInspectionService.GetAllTORInspection();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: torInspections.response
        })

    }catch(e){
        console.error("Error in inspection controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function CreateTORInspectionController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newTORInspection = await TORInspectionService.CreateTORInspection(request.body);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: newTORInspection.response
        })

    }catch(e){
        console.error("Error in inspection controller: "+e);
        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}

export async function GetTORInspectionPerCoopIdController(request : Request , response : Response){
    try{
     
        const data = await TORInspectionService.GetDataPerCoopId(request.params.id)

        response.status(200).json({messages : [{
            code: data.status,
            message: data.message,
            dateTime: GetCurrentDateSTR(),
        }],
        response:data.response
        });

    }catch(e){
        console.error("Error in tor main controller: "+e)
        response.status(500).json({messages : [{
            code: "500",
            message: "Error in getting data: "+e,
            dateTime: GetCurrentDateSTR(),
            }],
            response: {}
        })
        
    }
}