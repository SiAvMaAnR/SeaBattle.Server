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
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getUsers();
            return (users)
                ? res.status(200).send({ data: users, message: "Success!" })
                : res.status(404).send({ data: users, message: "Users is not found!" });
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.getUserById(id);
            return (user)
                ? res.status(200).send({ data: user, message: "Success!" })
                : res.status(404).send({ data: user, message: "User is not found!" });
        });
        this.addUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.addUser({
                login: req.body.login,
                password: req.body.password
            });
            return (user)
                ? res.status(200).send({ data: user, message: "Success!" })
                : res.status(400).send({ data: user, message: "User not added!" });
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const isDeleted = this.userService.deleteUserById(id);
            return (isDeleted)
                ? res.status(200).send({ message: "Success!" })
                : res.status(400).send({ message: "User not deleted!" });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map