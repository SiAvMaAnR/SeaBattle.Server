"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = __importDefault(require("./baseController"));
const userService_1 = __importDefault(require("../services/userService"));
class UserController extends baseController_1.default {
    constructor() {
        super();
        this.userService = new userService_1.default();
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getUsersAll();
            return (users)
                ? res.status(200).send({ data: users, message: "Success!" })
                : res.status(404).send({ data: users, message: "Users is not found!" });
        });
    }
    ;
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.getUserById(id);
            return (user)
                ? res.status(200).send({ data: user, message: "Success!" })
                : res.status(404).send({ data: user, message: "User is not found!" });
        });
    }
    ;
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const user = await this.userService.addUser({
            //     login: req.body.login,
            //     password: req.body.password
            // });
            // return (user)
            //     ? res.status(200).send({ data: user, message: "Success!" })
            //     : res.status(400).send({ data: user, message: "User not added!" });
        });
    }
    ;
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const isDeleted = this.userService.deleteUserById(id);
            return (isDeleted)
                ? res.status(200).send({ message: "Success!" })
                : res.status(400).send({ message: "User not deleted!" });
        });
    }
    ;
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map