"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameData_1 = __importDefault(require("./gameData"));
class Game {
    constructor(roomId) {
        this.getRoom = () => {
            return this.gameData.getRoomId();
        };
        this.start = () => {
        };
        this.addShips = (coordinates) => {
            const field = this.gameData.getMyField();
            coordinates.forEach(c => field[c.y][c.x] = 1 /* Cell.Added */);
        };
        this.getMyField = () => {
            const field = this.gameData.getMyField();
            return field.get();
        };
        this.getEnemyField = () => {
            const field = this.gameData.getEnemyField();
            return field.get();
        };
        this.gameData = new gameData_1.default(roomId);
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map