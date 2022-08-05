import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseConstroller";

class UserController extends BaseController {
    private userRepository: UserRepository = new UserRepository(sequelize);

    constructor() {
        super();
    }

    public getUsers = async (req, res) => {

        const users = await this.userRepository.getAll(x => x.statisticId > 8);


        return res.status(200).send({ data: "getUsers", users: users });
    };

    public getUser = async (req, res) => {
        const user = await this.userRepository.getOne(11);

        return res.status(200).send({ data: "getUser", user: user });
    };

    public addUser = async (req, res) => {
        await this.userRepository.create({
            name: "helllox",
            age: 1000,
            statisticId: 11
        });

        return res.status(200).send({ data: "addUser" });
    };


    public updateUser = async (req, res) => {
        return res.status(200).send({ data: "updateUser" });
    };


    public deleteUser = async (req, res) => {
        const result = this.userRepository.delete(4);
        return res.status(200).send({ data: "deleteUser" });
    };
}

export default new UserController();