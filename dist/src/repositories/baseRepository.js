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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
class BaseRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.create(entity);
            }
            catch (err) {
                throw err;
            }
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.findOne({
                    where: {
                        id: id
                    }
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    getAll(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.repository.findAll();
                return (arg && arg instanceof Function)
                    ? users.filter((el) => arg(el))
                    : users;
            }
            catch (err) {
                throw err;
            }
        });
    }
    delete(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (arg instanceof (sequelize_typescript_1.Model)) {
                    yield arg.destroy();
                }
                else if (typeof arg == "number") {
                    const item = yield this.getOne(arg);
                    yield item.destroy();
                }
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=baseRepository.js.map