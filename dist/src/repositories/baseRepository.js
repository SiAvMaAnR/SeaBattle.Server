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
const models_1 = require("../models");
class BaseRepository {
    constructor(repository) {
        this.repository = repository;
    }
    add(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.repository.create(entity);
            throw new Error("Method not implemented.");
        });
    }
    getOne(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const elements = yield this.repository.findAll();
            return (_a = elements.find(el => el.id == id)) !== null && _a !== void 0 ? _a : null;
        });
    }
    getAll(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.repository.findAll();
            return (arg && arg instanceof Function)
                ? users.filter((el) => arg(el))
                : users;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = sequelize_1.default.getRepository(models_1.User);
            repo.destroy({
                where: {
                    id: 100
                }
            });
            yield this.repository.destroy({});
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=baseRepository.js.map