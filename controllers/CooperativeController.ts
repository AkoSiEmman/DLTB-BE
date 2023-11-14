import {Request, Response} from 'express'
import { GetCurrentDateSTR } from '../common/GetCurrentDate';
import CooperativeService from '../services/CooperativeService';


export async function GetAllCooperativeController( request: Request, response : Response ){

    try{

        const allUsers = await CooperativeService.GetData();

        if(allUsers.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR(),
                }],
                response : allUsers.response
            })
        }else{
            response.status(201).json({messages : [{
                code: allUsers.status,
                message: allUsers.message,
                dateTime: GetCurrentDateSTR(),
                }],
                response: allUsers.response
            })
        }

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: GetCurrentDateSTR(),
            }],
            response: {}
        })

    }


}




export async function AddCooperativeController(request:  Request , response : Response){
      
    try{

        const newStation = await CooperativeService.AddData(request.body);

        if(newStation.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR(),
                }],
                response : newStation.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newStation.status,
                message: newStation.message,
                dateTime: GetCurrentDateSTR(),
                }],
                response: newStation.response
            })
        }

    }catch(e){
        
        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "1",
            message: ""+e,
            dateTime: GetCurrentDateSTR(),
            }],
            response: {}
        })
    }

}