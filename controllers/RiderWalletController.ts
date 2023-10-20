import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import RiderWalletService from "../services/RiderWalletService";


export async function GetAllRiderWalletController(request : Request , response : Response){
    
    const responseDate = GetCurrentDateSTR();

    try{

        const riderWallets = await  RiderWalletService.GetAllRiderWallet();

        if(riderWallets.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response : riderWallets.response
            })
        }else{
            response.status(201).json({messages : [{
                code: riderWallets.status,
                message: riderWallets.message,
                dateTime: responseDate,
                }],
                response: riderWallets.response
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

export async function AddRiderWalletController( request : Request, response : Response ){

    const responseDate = GetCurrentDateSTR();

    try{

        const newRiderWallet = await  RiderWalletService.AddRiderWallet(request.body);

        if(newRiderWallet.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: responseDate,
                }],
                response : newRiderWallet.response
            })
        }else{
            response.status(201).json({messages : [{
                code: newRiderWallet.status,
                message: newRiderWallet.message,
                dateTime: responseDate,
                }],
                response: newRiderWallet.response
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