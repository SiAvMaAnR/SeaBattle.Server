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
const statisticService_1 = __importDefault(require("../services/statisticService"));
class StatisticController extends baseController_1.default {
    constructor() {
        super(...arguments);
        this.statisticService = new statisticService_1.default();
    }
    getGames(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = (_b = (_a = req['user']) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id;
                if (!userId) {
                    throw {
                        status: 401,
                        message: "User not found!"
                    };
                }
                return res.status(200).json({
                    data: yield this.statisticService.getGames(userId),
                    message: "Success!"
                });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    ;
    getGameById(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = (_b = (_a = req['user']) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id;
                if (!userId) {
                    throw {
                        status: 401,
                        message: "User not found!"
                    };
                }
                const gameId = Number(req.params.id);
                if (!gameId) {
                    throw {
                        status: 400,
                        message: "Game not found!"
                    };
                }
                const game = yield this.statisticService.getGameById(userId, gameId);
                return res.status(200).json({
                    data: game,
                    message: "Success!"
                });
            }
            catch (err) {
                return res.status(err.status || 400).json({
                    message: err.message
                });
            }
        });
    }
    getCommonStat(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = (_b = (_a = req['user']) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id;
                if (!userId) {
                    throw {
                        status: 401,
                        message: "User not found!"
                    };
                }
                return res.status(200).json({
                    data: yield this.statisticService.getCommonStat(userId),
                    message: "Success!"
                });
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
exports.default = StatisticController;
//# sourceMappingURL=statisticController.js.map