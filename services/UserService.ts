import { GenerateHashPassword } from "../common/Bcrypt";
import { IUser } from "../models/UserModel";
import UserRepository from "../repositories/UserRepository";

class UserService{

    async GetAllUser(){

        try{

            const users = await UserRepository.GetAllUser();

            return {status: 0, message: "OK", response: users}
        }catch(e){

            console.log(`Error in repository: ${e}`)

            return {status: 500, message: e, response: {}}
        }

        

    }

    async GetUserById(id : String){

        try{

            const user = await UserRepository.GetUserById(id)

            return {status: 0, message: "OK", response: user}
    

        }catch(e){

            console.log(`Error in repository: ${e}`)

            return {status: 500, message: e, response: {}}
        }
      
    }

    async GetUserByEmail (email : string){

        try{
            const user = await UserRepository.GetUserPasswordByEmail(email);

            console.log(email)

            return {status: 0, message: "OK", response: user}
        }catch(e){
            console.log(`Error in repository: ${e}`)

            return {status: 500, message: e, response: {}}
        }

    }

    async AddUser(user : IUser){

        try{

            const hashedPassword = await GenerateHashPassword(user.password)

            const userAccount = {...user , "password" : hashedPassword}

           const saveUser = await UserRepository.AddUser(userAccount)

            return {status: 0, message: "OK", response: saveUser}
        }catch(e){
            console.log(`Error in adding vehicle: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }

    async UpdateUser(id : string, user : IUser){

        try{

            const updateUser = await UserRepository.UpdateUser(id, user)

            return {status: 0, message: "OK", response: updateUser}

        }catch(e){
            console.log(`Error in updating vehicle: ${e}`);
            return {status: 500, message: e, response: {}}
        }

    }

}

export default new UserService();