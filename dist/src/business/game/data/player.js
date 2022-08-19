"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enemyField_1 = __importDefault(require("../fields/enemyField"));
const myField_1 = __importDefault(require("../fields/myField"));
class Player {
    constructor(socketId) {
        this._isMove = false;
        this._isInit = false;
        this._isReady = false;
        this._isWin = false;
        this._myField = new myField_1.default();
        this._enemyField = new enemyField_1.default();
        this._socketId = socketId;
    }
    get isMove() {
        return this._isMove;
    }
    setIsMove(isMove) {
        this._isMove = isMove;
        return this._isMove;
    }
    get isWin() {
        return this._isWin;
    }
    setIsWin(isWin) {
        this._isWin = isWin;
    }
    get isInit() {
        return this._isInit;
    }
    setIsInit(isInit) {
        this._isInit = isInit;
    }
    get isReady() {
        return this._isReady;
    }
    setIsReady(isReady) {
        this._isReady = isReady;
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
    restart() {
        this._isMove = false;
        this._isInit = false;
        this._isReady = false;
        this._myField = new myField_1.default();
        this._enemyField = new enemyField_1.default();
    }
}
exports.default = Player;
//# sourceMappingURL=player.js.map