"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enemyField_1 = __importDefault(require("../fields/enemyField"));
const myField_1 = __importDefault(require("../fields/myField"));
class Player {
    constructor(socketId) {
        this._move = false;
        this._init = false;
        this._ready = false;
        this._myField = new myField_1.default();
        this._enemyField = new enemyField_1.default();
        this._socketId = socketId;
    }
    get move() {
        return this._move;
    }
    setMove(move) {
        this._move = move;
        return this._move;
    }
    get init() {
        return this._init;
    }
    setInit(init) {
        this._init = init;
    }
    setReady(ready) {
        this._ready = ready;
    }
    get ready() {
        return this._ready;
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