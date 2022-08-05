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
        throw new Error("Method not implemented.");
    }
    getOne(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof arg == 'number') {
                sequelize_1.default.getRepository(models_1.User);
                const a = yield this.repository.findAll();
                return a.find(x => x);
            }
        });
    }
    getAll(arg) {
        throw new Error("Method not implemented.");
    }
    delete(arg) {
        throw new Error("Method not implemented.");
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=baseRepository.js.map