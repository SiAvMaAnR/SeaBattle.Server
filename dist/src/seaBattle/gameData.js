"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enemyField_1 = __importDefault(require("./enemyField"));
const myField_1 = __importDefault(require("./myField"));
class GameData {
    constructor() {
        this.myField = new myField_1.default();
        this.enemyField = new enemyField_1.default();
        this.isMyMove = false;
        this.isStart = false;
    }
    getIsStart() {
        return this.isStart;
    }
    setIsStart(isStart) {
        this.isStart = isStart;
    }
    getIsMyMove() {
        return this.isMyMove;
    }
    setIsMyMove(isMyMove) {
        this.isMyMove = isMyMove;
    }
    getMyField() {
        return this.myField;
    }
    getEnemyField() {
        return this.enemyField;
    }
}
exports.default = GameData;
//# sourceMappingURL=gameData.js.map