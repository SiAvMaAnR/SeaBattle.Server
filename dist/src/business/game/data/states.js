"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class States {
    constructor() {
        this._isStart = false;
        this._isEnd = false;
        this._isAccess = false;
    }
    get isAccess() {
        return this._isAccess;
    }
    setIsAccess(isAccess) {
        this._isAccess = isAccess;
    }
    get isStart() {
        return this._isStart;
    }
    setIsStart(isStart) {
        this._isStart = isStart;
    }
    get isEnd() {
        return this._isEnd;
    }
    setIsEnd(isEnd) {
        this._isEnd = isEnd;
    }
}
exports.default = States;
//# sourceMappingURL=states.js.map