"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameData_1 = __importDefault(require("./gameData"));
class Game {
    constructor() {
        this.gameData = new gameData_1.default();
    }
    getIsVictory() {
        return this.gameData.getIsVictory();
    }
    setIsVictory(isVictory) {
        this.gameData.setIsVictory(isVictory);
    }
    getIsStart() {
        return this.gameData.getIsStart();
    }
    setIsStart(isStart) {
        this.gameData.setIsStart(isStart);
    }
    getIsMyMove() {
        return this.gameData.getIsMyMove();
    }
    setIsMyMove(isMyMove) {
        this.gameData.setIsMyMove(isMyMove);
    }
    getMyField() {
        return this.gameData.getMyField();
    }
    getEnemyField() {
        return this.gameData.getEnemyField();
    }
    init(field) {
        this.getMyField().setField(field);
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map