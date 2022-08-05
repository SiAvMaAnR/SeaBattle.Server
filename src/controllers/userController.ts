import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseConstroller";

class UserController extends BaseController {
    private userRepository: UserRepository = new UserRepository(sequelize);

    constructor() {
        super();
    }

    public getUsers = async (req, res) => {

        const users = await this.userRepository.getAll(el=> el.id > 5);


        return res.status(200).send({ data: "getUsers", users: users });
    };

    public getUser = async (req, res) => {
        const user = await this.userRepository.getOne(4);

        return res.status(200).send({ data: "getUser", user: user });
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