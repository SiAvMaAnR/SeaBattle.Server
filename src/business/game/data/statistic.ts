class Statistic {
    private _countMyMoves: number = 0;
    private _countHits: number = 0;
    private _countMisses: number = 0;
    private _isWin: boolean = false;
    private _enemy: string = "none";

    constructor() {

    }

    public get(): IStatisticRes {
        return {
            countMyMoves: this._countMyMoves,
            countHits: this._countHits,
            countMisses: this._countMisses,
            isWin: this._isWin,
            enemy: this._enemy
        }
    }


    public setEnemy(enemy: string): void {
        this._enemy = enemy;
    }

    public addMyMoves(): number {
        return ++this._countMyMoves;
    }

    public addHits(): number {
        return ++this._countHits;
    }

    public addMisses(): number {
        return ++this._countMisses;
    }

    public setIsWin(isWin: boolean): void {
        this._isWin = isWin;
    }
}

interface IStatisticRes {
    countMyMoves: number,
    countHits: number,
    countMisses: number,
    isWin: boolean,
    enemy: string
}

export { IStatisticRes };
export default Statistic;