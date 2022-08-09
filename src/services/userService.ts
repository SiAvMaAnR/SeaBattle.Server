import IUserService from "../interfaces/services/IUserService";
import { User } from "../models";
import BaseService from "./baseService";


class UserService extends BaseService implements IUserService{
    constructor(){
        super();
    }
    createUser(): Promise<User> {
        throw new Error("Method not implemented.");
    }
}

export default UserService;