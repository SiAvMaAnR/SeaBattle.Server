"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.getUsers = (req, res) => {
            return res.status(200).send({
                data: ["a", 'b', 'c']
            });
        };
        this.setUsers = (req, res) => {
            return res.status(200).send({
                data: {
                    a: 1,
                    b: 2
                }
            });
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=users.constroller.js.map