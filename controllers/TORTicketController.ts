import { Request, Response } from "express";
import { GetCurrentDateSTR } from "../common/GetCurrentDate";
import TORTicketServices from "../services/TORTicketServices";

export async function GetTORTicketMainByCoopIdAndDateController(request: Request, response: Response){

    try{
        const data = await TORTicketServices.GetDataPerCoopIdAndDateRange(request.params.id, request.body.fromDate, request.body.toDate);
        response.status(200).json({messages : [{
            code: data.status,
            message: data.message,
            dateTime: GetCurrentDateSTR(),
        }],
        response: data.response
        });
    }catch(e){
        console.error("Error in tor main controller: "+e)
        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: GetCurrentDateSTR(),
            }],
            response: {}
        })
    }

}

export async function GetAllTicketController(request: Request, response: Response){
    
    const responseDate = GetCurrentDateSTR();
    
    try{

        const torTickets = await TORTicketServices.GetAllTORTicketService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: torTickets
        })

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}

export async function SyncGetAllTicket(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const torTicket = await TORTicketServices.SyncGetAllTORTicketService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: torTicket
        })

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in getting employees: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
        
    }

}

export async function CreateTorTicketController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const insertTicketToDb = await TORTicketServices.InsertTORTickeToOurDBServices(request.body);

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
            }],
            response: {}
        })

 }catch(e){
        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in creating tor ticket: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })

    }

}

export async function SyncTORTicketController(request: Request, response: Response){

    const responseDate = GetCurrentDateSTR();

    try{

        const syncTorTicket = await TORTicketServices.SyncTORTicketService();

        response.status(200).json({messages : [{
            code: "0",
            message: "OK",
            dateTime: responseDate,
        }],
        response: syncTorTicket
        });

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Error in creating tor ticket: "+e,
            dateTime: responseDate,
            }],
            response: {}
        })
    }

}


export async function GetTORTicketPerCoopIdController(request : Request, response : Response){

    try{

        const data = await TORTicketServices.GetDataPerCoopId(request.params.id);

        response.status(200).json({messages : [{
            code: data.status,
            message: data.message,
            dateTime: GetCurrentDateSTR(),
        }],
        response: data.response
        });

    }catch(e){

        console.error("Error in controller: "+e);

        response.status(500).json({messages : [{
            code: "212",
            message: "Internal Server Error: "+e,
            dateTime: GetCurrentDateSTR(),
            }],
            response: {}
        })
    }

}