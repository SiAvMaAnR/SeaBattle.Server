"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enemyField_1 = __importDefault(require("./enemyField"));
const myField_1 = __importDefault(require("./myField"));
class GameData {
    constructor(roomId) {
        this.myField = new myField_1.default();
        this.enemyField = new enemyField_1.default();
        this.roomId = "queue";
        this.roomId = roomId;
    }
    getMyField() {
        return this.myField;
    }
    getEnemyField() {
        return this.enemyField;
    }
    getRoomId() {
        return this.roomId;
    }
}
exports.default = GameData;
//# sourceMappingURL=gameData.js.map