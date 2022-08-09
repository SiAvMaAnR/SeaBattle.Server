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
        this.game = new game_1.default("");
        this.newGame = (roomId) => {
            this.game = new game_1.default(roomId);
            return this;
        };
        this.getRoomId = () => {
            return this.game.getRoom();
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
        this.addShip = (coordinates) => {
            this.game.addShips(coordinates);
            return this;
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
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map