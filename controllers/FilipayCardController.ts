
import {Request, Response } from 'express'
import FilipayCardService from '../services/FilipayCardService';
import { GetCurrentDateSTR } from '../common/GetCurrentDate';


export async function GetFilipayCardController(request : Request, response : Response){

    try{

        const data = await FilipayCardService.GetAllData();

      
            response.status(201).json({messages : [{
                code: data.status,
                message: data.message,
                dateTime: GetCurrentDateSTR(),
                }],
                response: data.response
            })
 

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