import BaseRepository from "./baseRepository";
import { User } from "../models";
import { Sequelize } from "sequelize-typescript";
import { basename } from "path";
import IWriteRepository from "../interfaces/repositories/IWrite";
import IReadRepository from "../interfaces/repositories/IRead";


class UserRepository extends BaseRepository<User> {

    public constructor(sequelize: Sequelize) {
        super(sequelize.getRepository(User));
    }
}

export default UserRepository;