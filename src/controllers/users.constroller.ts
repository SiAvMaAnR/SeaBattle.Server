import UserService from "../services/users.service";
import sequelize from "../sequelize/sequelize";
import User from "../models/User";

class UserController {
    public getUsers = async (req, res) => {
        return res.status(200).send({ data: "getUsers" });
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