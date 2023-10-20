
import { Request, Response } from "express";
import {  GetCurrentDateSTR } from "../common/GetCurrentDate";
import RiderServices from "../services/RiderServices";

export async function GetRiderByCardIdController( request : Request, response : Response ){

    const responseDate = GetCurrentDateSTR();

    
    try{

        const rider = await RiderServices.GetRiderByCardId( request.params.id )

        if(rider.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: rider.message,
                dateTime: responseDate,
                }],
                response : rider.response
            })
        }else{
            response.status(201).json({messages : [{
                code: rider.status,
                message: rider.message,
                dateTime: responseDate,
                }],
                response: rider.response
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

export async function GetAllRiderController(request : Request, response : Response){

    const responseDate = GetCurrentDateSTR()

    try{

        const riders = await RiderServices.GetAllRider();

        if(riders.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response : riders.response
            })
        }else{
            response.status(201).json({messages : [{
                code: riders.status,
                message: riders.message,
                dateTime: responseDate,
                }],
                response: riders.response
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

export async function AddRiderController( request: Request, response : Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const newRider = await RiderServices.AddRiderWallet(request.body)

        if(newRider.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response : newRider.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newRider.status,
                message: newRider.message,
                dateTime: responseDate,
                }],
                response: newRider.response
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