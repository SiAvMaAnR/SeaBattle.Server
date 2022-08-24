import { Optional } from "sequelize/types";
import { NullishPropertiesOf } from "sequelize/types/utils";
import { User } from "../../models";
import IUser from "../../models/interfaces/IUser";


interface IUserService {
    addUser(user: Optional<IUser, NullishPropertiesOf<IUser>>): Promise<User>;
    getUserById(id: number): Promise<User>;
    getUsers(fn?: Function): Promise<User[]>;
    getUsersAll(): Promise<User[]>;
    deleteUserById(id: number): Promise<boolean>;
    deleteUser(entity: User): Promise<boolean>;
}

export default IUserService;