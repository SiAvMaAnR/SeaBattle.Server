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
const sequelize_1 = __importDefault(require("../database/sequelize"));
const statisticRepository_1 = __importDefault(require("../repositories/statisticRepository"));
const baseService_1 = __importDefault(require("./baseService"));
class StatisticService extends baseService_1.default {
    constructor() {
        super(...arguments);
        this.repository = new statisticRepository_1.default(sequelize_1.default);
    }
    addGame(userId, props) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.create({
                countMyMoves: props.countMyMoves,
                countHits: props.countHits,
                countMisses: props.countMisses,
                isWin: props.isWin,
                enemy: props.enemy,
                userId: userId
            });
        });
    }
    getGameById(userId, gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getOne({
                where: {
                    userId: userId,
                    id: gameId
                }
            });
        });
    }
    getGames(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.get({
                where: {
                    userId: userId
                },
            });
        });
    }
    getCommonStat(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sumMoves = yield this.repository.sum('countMyMoves', {
                where: {
                    userId: userId,
                },
            });
            const countWins = yield this.repository.count({
                where: {
                    userId: userId,
                    isWin: true
                }
            });
            const countGames = yield this.repository.count({
                where: {
                    userId: userId,
                }
            });
            const sumHits = yield this.repository.sum('countHits', {
                where: {
                    userId: userId,
                }
            });
            return {
                sumMoves: sumMoves,
                countWins: countWins,
                countGames: countGames,
                sumHits: sumHits
            };
        });
    }
}
exports.default = StatisticService;
//# sourceMappingURL=statisticService.js.map