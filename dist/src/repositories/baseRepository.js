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
    add(entity) {
        throw new Error("Method not implemented.");
    }
    getOne(arg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof arg == 'number') {
                const a = yield this.repository.findAll();
                return a.find(x => x.id == arg);
            }
            else if (arg instanceof Function) {
            }
            else {
                return null;
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