import sequelize from "../database/sequelize";
import UserRepository from "../repositories/userRepository";
import BaseController from "./baseController";
import StatisticRepository from "../repositories/gameStatRepository";
import UserService from "../services/userService";
import { Request, Response } from 'express';
import jwt from "../helpers/jwt";

class UserController extends BaseController {
    private userService = new UserService();

    constructor() {
        super();
    }

    public async getUsers(req: Request, res: Response) {

        
        const users = await this.userService.getUsersAll();

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

        


        // const user = await this.userService.addUser({
        //     login: req.body.login,
        //     password: req.body.password
        // });

        // return (user)
        //     ? res.status(200).send({ data: user, message: "Success!" })
        //     : res.status(400).send({ data: user, message: "User not added!" });
    };


    public async login(req: Request, res: Response){
        // for (let user of users) {
        //     if (
        //       req.body.login === user.login &&
        //       req.body.password === user.password
        //     ) {
        //       return res.status(200).json({
        //         id: user.id,
        //         login: user.login,
        //         token: jwt.sign({ id: user.id }, tokenKey),
        //       })
        //     }
        //   }
        
        //   return res.status(404).json({ message: 'User not found' })
        // }

        // const token = jwt.generateAccessToken({ username: req.body.username });
        // res.status(200).json(token);
    }

    public async deleteUser(req: Request, res: Response) {

        const id = parseInt(req.params.id);
        const isDeleted = this.userService.deleteUserById(id);

        return (isDeleted)
            ? res.status(200).send({ message: "Success!" })
            : res.status(400).send({ message: "User not deleted!" });
    };
}

export default UserController;