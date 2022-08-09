"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameData_1 = __importDefault(require("./gameData"));
class Game {
    constructor() { }
    init(roomId) {
        this.gameData = new gameData_1.default(roomId);
    }
    // public getData(): GameData {
    //     return this.gameData;
    // }
    getRoom() {
        return this.gameData.getRoomId();
    }
    start() {
    }
    setPositionShips() {
    }
    getMyField() {
        const field = this.gameData.getMyField();
        return field.get();
    }
    getEnemyField() {
        const field = this.gameData.getEnemyField();
        return field.get();
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map