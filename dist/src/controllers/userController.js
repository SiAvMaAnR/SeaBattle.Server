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
const sequelize_1 = __importDefault(require("../sequelize/sequelize"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
class UserController {
    constructor() {
        this.userRepository = new userRepository_1.default(sequelize_1.default);
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getOne(4);
            return res.status(200).send({ data: "getUsers", user: user });
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send({ data: "getUser" });
        });
        this.addUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send({ data: "addUser" });
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send({ data: "updateUser" });
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send({ data: "deleteUser" });
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map