import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseConstroller";

class UserController extends BaseController {
    private userRepository: UserRepository = new UserRepository(sequelize);

    constructor() {
        super();
    }

    public getUsers = async (req, res) => {

        const user = await this.userRepository.getOne(5);
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