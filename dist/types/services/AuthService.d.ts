import { ICardUser } from "../repositories/CardUserRepository";
interface IUserLogin {
    email: string;
    password: string;
}
declare class AuthService {
    CheckIfCardUserMatch(data: ICardUser): Promise<boolean>;
    Auth(userData: IUserLogin): Promise<{
        status: number;
        message: string;
        response: any;
    } | {
        status: number;
        message: unknown;
        response: unknown;
    }>;
}
declare const _default: AuthService;
export default _default;
