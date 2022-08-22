"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Statistic {
    constructor() {
        this._countMyMoves = 0;
        this._countHits = 0;
        this._countMisses = 0;
        this._isWin = false;
        this._enemy = "none";
    }
    get() {
        return {
            countMyMoves: this._countMyMoves,
            countHits: this._countHits,
            countMisses: this._countMisses,
            isWin: this._isWin,
            enemy: this._enemy
        };
    }
    setEnemy(enemy) {
        this._enemy = enemy;
    }
    addMyMoves() {
        return ++this._countMyMoves;
    }
    addHits() {
        return ++this._countHits;
    }
    addMisses() {
        return ++this._countMisses;
    }
    setIsWin(isWin) {
        this._isWin = isWin;
    }
}
exports.default = Statistic;
//# sourceMappingURL=statistic.js.map