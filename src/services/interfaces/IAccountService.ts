import { Optional } from "sequelize/types";
import { NullishPropertiesOf } from "sequelize/types/utils";
import { User } from "../../models";
import IUser from "../../models/interfaces/IUser";

interface IAccountService {
    getUserByLogin(login: string): Promise<User>;
    createUser(user: Optional<IUser, NullishPropertiesOf<IUser>>): Promise<User>;
}

export default IAccountService;