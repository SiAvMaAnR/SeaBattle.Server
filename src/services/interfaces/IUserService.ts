import { User } from "../../models";


interface IUserService {
    addUser(user: User): Promise<User>;
    getUserById(id: number): Promise<User>;
    getUsers(fn?: Function): Promise<User[]>;
    deleteUserById(id: number): Promise<boolean>;
    deleteUser(entity: User): Promise<boolean>;
}

export default IUserService;