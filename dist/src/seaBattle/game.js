"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameData_1 = __importDefault(require("./gameData"));
class Game {
    constructor(roomId, nickName) {
        this.gameData = new gameData_1.default(roomId, nickName);
    }
    getName() {
        return this.gameData.getName();
    }
    setName(name) {
        this.gameData.setName(name);
    }
    getRoom() {
        return this.gameData.getRoomId();
    }
    getMyField() {
        return this.gameData.getMyField();
    }
    getEnemyField() {
        return this.gameData.getEnemyField();
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map