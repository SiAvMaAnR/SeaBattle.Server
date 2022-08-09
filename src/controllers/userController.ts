import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";

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

        const user = await this.userRepository.create({
            login: "login",
            password: "password"
        });

        await this.statisticRepository.create({
            moveCount: 10,
            isWin: true,
            killed: 10,
            lost: 8,
            userId: user.id
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

export default UserController;