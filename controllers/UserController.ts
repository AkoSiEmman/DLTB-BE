import {Request, Response } from 'express'
import { GetCurrentDateSTR } from '../common/GetCurrentDate';
import UserService from '../services/UserService';

export async function UpdateUserByIdController(request : Request, response : Response){

    try{

        const updateUser = await UserService.UpdateUser(request.params.id, request.body);

        if(updateUser.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR,
                }],
                response : updateUser.response
            })
        }else{
            response.status(201).json({messages : [{
                code: updateUser.status,
                message: updateUser.message,
                dateTime: GetCurrentDateSTR,
                }],
                response: updateUser.response
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

export async function GetAllUserController(request : Request, response: Response){

    try{

        const allUsers = await UserService.GetAllUser();

        if(allUsers.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR,
                }],
                response : allUsers.response
            })
        }else{
            response.status(201).json({messages : [{
                code: allUsers.status,
                message: allUsers.message,
                dateTime: GetCurrentDateSTR,
                }],
                response: allUsers.response
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

export async function GetUserByCompanyIdController( request : Request, response : Response){

    try{

        const user = await UserService.GetAllByCompanyId(request.params.id)

        if(user.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR,
                }],
                response : user.response
            })
        }else{
            response.status(201).json({messages : [{
                code: user.status,
                message: user.message,
                dateTime: GetCurrentDateSTR,
                }],
                response: user.response
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


export async function GetUserByIdController( request : Request, response : Response){

    try{

        const user = await UserService.GetUserById(request.params.id)

        if(user.status === 0 ){
            response.status(200).json({messages : [{
                code: "0",
                message: "OK",
                dateTime: GetCurrentDateSTR,
                }],
                response : user.response
            })
        }else{
            response.status(201).json({messages : [{
                code: user.status,
                message: user.message,
                dateTime: GetCurrentDateSTR,
                }],
                response: user.response
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

export async function AddUserContorller(request : Request, response: Response){

    
    try{

        const newStation = await UserService.AddUser(request.body);

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

