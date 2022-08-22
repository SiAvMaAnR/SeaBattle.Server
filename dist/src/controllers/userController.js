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
            try {
                const users = yield this.userService.getUsersAll();
                if (!users) {
                    throw {
                        status: 404,
                        message: "Users is not found!"
                    };
                }
                res.status(200).json({ data: users, message: "Success!" });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    ;
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (!id) {
                    throw {
                        status: 400,
                        message: "Id incorrect!"
                    };
                }
                const user = yield this.userService.getUserById(id);
                if (!user) {
                    throw {
                        status: 400,
                        message: "User is not found!"
                    };
                }
                res.status(200).json({ data: user, message: "Success!" });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    ;
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.addUser({
                    login: req.body.login,
                    password: req.body.password
                });
                if (!user) {
                    throw {
                        status: 400,
                        message: "User not added!"
                    };
                }
                res.status(200).json({ data: user, message: "Success!" });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    ;
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (!id) {
                    throw {
                        status: 400,
                        message: "Id incorrect!"
                    };
                }
                const isDeleted = this.userService.deleteUserById(id);
                if (!isDeleted) {
                    throw {
                        status: 400,
                        message: "User not deleted!"
                    };
                }
                res.status(200).json({ message: "Success!" });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    ;
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map