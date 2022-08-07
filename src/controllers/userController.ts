import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/statisticRepository";

class UserController extends BaseController {
    private userRepository: UserRepository = new UserRepository(sequelize);
    private statisticRepository: StatisticRepository = new StatisticRepository(sequelize);

    constructor() {
        super();
    }

    public getUsers = async (req, res) => {

        const users = await this.userRepository.getAll();


        return res.status(200).send({ data: "getUsers", users: users });
    };

    public getUser = async (req, res) => {
        const user = await this.userRepository.getOne(11);

        return res.status(200).send({ data: "getUser", user: user });
    };

    public addUser = async (req, res) => {

        const statistic = await this.statisticRepository.create({
            test1: "help"
        });

        await this.userRepository.create({
            name: "helllox",
            age: 1000,
            statisticId: statistic.id
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