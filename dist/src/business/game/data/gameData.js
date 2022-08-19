"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameData {
    constructor() {
        this._isStart = false;
        this._isEnd = false;
    }
    get isStart() {
        return this._isStart;
    }
    set isStart(isStart) {
        this._isStart = isStart;
    }
    get isEnd() {
        return this._isEnd;
    }
    set isEnd(isEnd) {
        this._isEnd = isEnd;
    }
}
exports.default = GameData;
//# sourceMappingURL=gameData.js.map