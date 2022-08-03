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
const User_1 = __importDefault(require("../models/User"));
class UserController {
    constructor() {
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = User_1.default.build({
                id: 1,
                name: "User1",
                age: 10
            });
            return res.status(200).send({ data: "getUsers", data1: user });
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
//# sourceMappingURL=users.constroller.js.map