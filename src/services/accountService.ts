import { Optional } from "sequelize/types";
import { NullishPropertiesOf } from "sequelize/types/utils";
import sequelize from "../database/sequelize";
import IUser from "../models/interfaces/IUser";
import User from "../models/user";
import UserRepository from "../repositories/userRepository";
import BaseService from "./baseService";
import IAccountService from "./interfaces/IAccountService";

class AccountService extends BaseService implements IAccountService {
    private repository = new UserRepository(sequelize);

    public async getUserByLogin(login: string): Promise<User> {
        return await this.repository.getOne({
            where: {
                login
            }
        });
    }

    public async createUser(user: Optional<IUser, NullishPropertiesOf<IUser>>): Promise<User> {
        return await this.repository.create(user);
    }
}

export default AccountService;