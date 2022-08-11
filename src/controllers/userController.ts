import sequelize from "../sequelize/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";
import UserService from "../services/userService";
import { User } from "../models";
import { Request, Response } from 'express';

class UserController extends BaseController {
    private userService = new UserService();

    constructor() {
        super();
    }

    public async getUsers(req: Request, res: Response) {

        const users = await this.userService.getUsers();

        return (users)
            ? res.status(200).send({ data: users, message: "Success!" })
            : res.status(404).send({ data: users, message: "Users is not found!" })
    };

    public async getUser(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const user = await this.userService.getUserById(id);

        return (user)
            ? res.status(200).send({ data: user, message: "Success!" })
            : res.status(404).send({ data: user, message: "User is not found!" })
    };

    public async addUser(req: Request, res: Response) {

        const user = await this.userService.addUser({
            login: req.body.login,
            password: req.body.password
        });

        return (user)
            ? res.status(200).send({ data: user, message: "Success!" })
            : res.status(400).send({ data: user, message: "User not added!" });
    };



    public async deleteUser(req: Request, res: Response) {

        const id = parseInt(req.params.id);
        const isDeleted = this.userService.deleteUserById(id);

        return (isDeleted)
            ? res.status(200).send({ message: "Success!" })
            : res.status(400).send({ message: "User not deleted!" });
    };
}

export default UserController;