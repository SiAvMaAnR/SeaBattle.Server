import BaseRepository from "./baseRepository";
import { User } from "../models";
import { Sequelize } from "sequelize-typescript";


class UserRepository extends BaseRepository<User> {

    public constructor(sequelize: Sequelize) {
        super(sequelize.getRepository(User));
    }
}

export default UserRepository;