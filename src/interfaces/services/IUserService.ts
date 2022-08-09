import { User } from "../../models";
import IService from "./IService";


interface IUserService extends IService {
    createUser():Promise<User>
}

export default IUserService;