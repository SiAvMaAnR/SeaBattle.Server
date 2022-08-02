import UserService from "../services/users.service";

class UserController {
    public getUsers: any = (req, res) => {
        return res.status(200).send({
            data: ["a", 'b', 'c']
        });
    };

    public setUsers: any = (req, res) => {
        return res.status(200).send({
            data: {
                a: 1,
                b: 2
            }
        });
    };
}

export default new UserController();