"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("./baseService"));
const game_1 = __importDefault(require("../seaBattle/game"));
class GameService extends baseService_1.default {
    constructor() {
        super();
        this.game = null;
        this.createGame = () => {
            this.game = new game_1.default();
            return this;
        };
        this.initGame = (roomId) => {
            this.game.init(roomId);
            return this;
        };
        this.startGame = () => {
            this.game.start();
            return this;
        };
        this.getMyField = () => {
            return this.game.getMyField();
        };
        this.getEnemyField = () => {
            return this.game.getEnemyField();
        };
        this.editMyField = (cell, { y, x }) => {
            const field = this.game.getMyField();
            field[y][x] = cell;
            return this;
        };
        this.editEnemyField = (cell, { y, x }) => {
            const field = this.game.getEnemyField();
            field[y][x] = cell;
            return this;
        };
    }
    getRoomId() {
        return this.game.getRoom();
    }
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map