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
class BaseRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.create(entity);
            }
            catch (err) {
                return null;
            }
        });
    }
    getOneByPk(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.findByPk(id);
            }
            catch (err) {
                return null;
            }
        });
    }
    getOne(findOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.findOne(findOptions);
            }
            catch (err) {
                return null;
            }
        });
    }
    get(findOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.findAll(findOptions);
            }
            catch (err) {
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repository.findAll();
            }
            catch (err) {
                return null;
            }
        });
    }
    delete(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield entity.destroy();
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    deleteByPk(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.getOneByPk(id);
                yield item.destroy();
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=baseRepository.js.map