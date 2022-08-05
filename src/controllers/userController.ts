import UserService from "../services/userService";
import sequelize from "../sequelize/sequelize";
import IRepository from "../interfaces/repositories/IRepository";
import User from "../models/user";
import UserRepository from "../repositories/userRepository";
import IController from "../interfaces/controllers/IController";

class UserController implements IController<User> {
    private userRepository: UserRepository = new UserRepository(sequelize);

    constructor() {

    }

    public getUsers = async (req, res) => {

        const user = await this.userRepository.getOne(4);
        return res.status(200).send({ data: "getUsers", user: user });
    };

    public getUser = async (req, res) => {
        return res.status(200).send({ data: "getUser" });
    };

    public addUser = async (req, res) => {
        return res.status(200).send({ data: "addUser" });
    };


    public updateUser = async (req, res) => {
        return res.status(200).send({ data: "updateUser" });
    };


    public deleteUser = async (req, res) => {
        return res.status(200).send({ data: "deleteUser" });
    };
}

export default new UserController();