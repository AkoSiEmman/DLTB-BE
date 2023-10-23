import { ICardUser } from "../repositories/CardUserRepository";
declare class AuthService {
    CheckIfCardUserMatch(data: ICardUser): Promise<boolean>;
}
declare const _default: AuthService;
export default _default;
