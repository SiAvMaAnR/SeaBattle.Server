import BaseController from "./baseController";
import { Request, Response } from "express";
import JWT from "../helpers/jwt";
import AccountService from "../services/accountService";

class AccountController extends BaseController {
    private accountService: AccountService = new AccountService();

    constructor() {
        super();
    }

    public async login(req: Request, res: Response) {
        try {
            const login = req.body.login;
            const password = req.body.password;

            const user = await this.accountService.getUserByLogin(login);

            if (!user) {
                throw {
                    status: 401,
                    message: "User not found!"
                }
            }

            if (user?.password !== password) {
                throw {
                    status: 400,
                    message: "Invalid password!"
                }
            }

            return res.status(200).json({
                type: "Bearer",
                token: JWT.generateToken({
                    id: user.id,
                    login: login
                }),
            });
        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    }

    public async register(req: Request, res: Response) {
        try {
            const login = req.body.login;
            const password = req.body.password;

            const user = await this.accountService.getUserByLogin(login);


            if (!login || !password) {
                throw {
                    message: "Incorrect login or password!"
                }
            }

            if (user) {
                throw {
                    message: "User already exists!"
                }
            }

            if (!(/^[a-zA-Z0-9]{6,25}$/).test(login)) {
                throw {
                    message: "Incorrect login!"
                }
            }

            if (!(/^[a-zA-Z0-9]{6,20}$/).test(password)) {
                throw {
                    message: "Incorrect password!"
                }
            }

            const newUser = await this.accountService.createUser({
                login, password
            });

            return res.status(200).json({
                data: newUser,
                message: "Success!"
            });
        }
        catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }

    }


    public async info(req: Request, res: Response) {
        try {
            return res.status(200).json({
                data: req['user'],
                message: "Success!"
            });
        } catch (err) {
            return res.status(err.status || 400).json({
                message: err.message
            });
        }
    }

}

export default AccountController;