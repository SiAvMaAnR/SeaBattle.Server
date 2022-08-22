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
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const sequelize_1 = __importDefault(require("../database/sequelize"));
const baseService_1 = __importDefault(require("./baseService"));
class UserService extends baseService_1.default {
    constructor() {
        super();
        this.repository = new userRepository_1.default(sequelize_1.default);
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(user);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getOneByPk(id);
        });
    }
    getUsers(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.get(fn);
        });
    }
    getUsersAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getAll();
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.deleteByPk(id);
        });
    }
    deleteUser(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(entity);
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map