import { Optional } from "sequelize/types";
import { NullishPropertiesOf } from "sequelize/types/utils";
import { User } from "../models";
import IUser from "../models/interfaces/IUser";
import UserRepository from "../repositories/userRepository";
import sequelize from "../sequelize/sequelize";
import BaseService from "./baseService";
import IUserService from "./interfaces/IUserService";


class UserService extends BaseService implements IUserService {
    private repository = new UserRepository(sequelize);

    constructor() {
        super();
    }

    public async addUser(user: Optional<IUser, NullishPropertiesOf<IUser>>): Promise<User> {
        return await this.repository.create(user);
    }
    public async getUserById(id: number): Promise<User> {
        return await this.repository.getOne(id);
    }
    public async getUsers(fn: Function): Promise<User[]> {
        return await this.repository.get(fn);
    }
    public async getUsersAll(): Promise<User[]> {
        return await this.repository.getAll();
    }
    public async deleteUserById(id: number): Promise<boolean> {
        return await this.repository.delete(id);
    }
    public async deleteUser(entity: User): Promise<boolean> {
        return await this.repository.delete(entity);
    }
}

export default UserService;