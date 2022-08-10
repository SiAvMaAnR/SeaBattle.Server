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
    }
    newGame(roomId) {
        this.game = new game_1.default(roomId);
        return this;
    }
    getRoomId() {
        return this.game.getRoom();
    }
    startGame() {
        this.game.start();
        return this;
    }
    getMyFieldArr() {
        return this.game.getMyField().getArr();
    }
    getEnemyFieldArr() {
        return this.game.getEnemyField().getArr();
    }
    addShip(y, x) {
        this.game.getMyField().add(y, x);
        return this;
    }
    editMyField(cell, y, x) {
        this.game.getMyField().edit(cell, y, x);
        return this;
    }
    editEnemyField(cell, y, x) {
        this.game.getEnemyField().edit(cell, y, x);
        return this;
    }
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map