import UserModel, { IUser } from "../models/UserModel";

class UserRepository {

    async GetAllUser(){

        try{

            const users = await UserModel.find({});

            return users

        }catch(e){

            console.log(`Error in getting vehicles ${e}`)

            return e;

        }

    }

    async GetUserById (id : String){

        try{

            const user = await UserModel.findOne({ "_id" : id })

            return user
        }catch(e){

            console.log(`Error in getting repository: ${e}`)

            return e

        }

    }

    async AddUser( newUser : IUser ){

        try{

            const addUser = new UserModel(newUser);

            return await addUser.save();

        }catch(e){

            console.log(`Error in getting repository: ${e}`)

            return e

        }

    }

    async CheckIfEmailExist (email : string){

        try{

            const user = await UserModel.findOne({"email" : email})

            return user;

        }catch(e){

            console.log(`Error in repository: ${e}`)

            return e

        }

    }



    async GetUserPasswordByEmail ( email : string ){

        try{

            const user = await UserModel.findOne({"email" : email})

            return user
            
        }catch(e){


            console.log(`Error in repository: ${e}`)

            return e

        }

    }

}

export default new UserRepository();