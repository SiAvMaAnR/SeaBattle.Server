import UserService from "../services/users.service";

class UserController {
    public getUsers = async (req, res) => {
        return res.status(200).send({ data: "getUsers" });
    };

    public getUser = async (req, res) => {
        return res.status(200).send({ gata: "getUser" });
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