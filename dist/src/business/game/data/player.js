"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enemyField_1 = __importDefault(require("../fields/enemyField"));
const myField_1 = __importDefault(require("../fields/myField"));
class Player {
    constructor(socketId) {
        this._myField = new myField_1.default();
        this._enemyField = new enemyField_1.default();
        this._socketId = socketId;
    }
    get socketId() {
        return this._socketId;
    }
    get myField() {
        return this._myField;
    }
    get enemyField() {
        return this._enemyField;
    }
}
exports.default = Player;
//# sourceMappingURL=player.js.map