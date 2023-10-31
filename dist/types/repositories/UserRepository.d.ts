import { IUser } from "../models/UserModel";
declare class UserRepository {
    GetAllUser(): Promise<unknown>;
    GetUserById(id: String): Promise<unknown>;
    AddUser(newUser: IUser): Promise<unknown>;
    CheckIfEmailExist(email: string): Promise<unknown>;
    GetUserPasswordByEmail(email: string): Promise<unknown>;
    UpdateUser(id: string, user: IUser): Promise<unknown>;
}
declare const _default: UserRepository;
export default _default;
