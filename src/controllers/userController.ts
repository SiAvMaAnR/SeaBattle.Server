import BaseController from "./baseController";
import UserService from "../services/userService";
import { Request, Response } from 'express';

class UserController extends BaseController {
    private userService = new UserService();

    constructor() {
        super();
    }

    public async getUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.getUsersAll();

            if (!users) {
                throw {
                    status: 401,
                    message: "Users is not found!"
                }
            }


            res.status(200).json({ data: users, message: "Success!" })
        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }
    };

    public async getUser(req: Request, res: Response) {

        try {
            const id = Number(req.params.id);

            if (!id) {
                throw {
                    status: 400,
                    message: "Id incorrect!"
                }
            }

            const user = await this.userService.getUserById(id);

            if (!user) {
                throw {
                    status: 400,
                    message: "User is not found!"
                }
            }

            res.status(200).json({ data: user, message: "Success!" })
        } catch (err) {

            return res.status(err.status || 400).json({
                message: err.message
            });
        }
    };

    public async addUser(req: Request, res: Response) {
        try {
            const user = await this.userService.addUser({
                login: req.body.login,
                password: req.body.password
            });

            if (!user) {
                throw {
                    status: 400,
                    message: "User not added!"
                }
            }

            res.status(200).json({ data: user, message: "Success!" })
        } catch (err) {

            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    };

    public async deleteUser(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (!id) {
                throw {
                    status: 400,
                    message: "Id incorrect!"
                }
            }

            const isDeleted = this.userService.deleteUserById(id);

            if (!isDeleted) {
                throw {
                    status: 400,
                    message: "User not deleted!"
                }
            }

            res.status(200).json({ message: "Success!" })

        } catch (err) {

            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    };
}

export default UserController;