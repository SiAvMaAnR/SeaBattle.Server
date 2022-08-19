class GameData {

    private _isStart: boolean = false;
    private _isEnd: boolean = false;

    constructor() {

    }


    public get isStart(): boolean {
        return this._isStart;
    }

    public set isStart(isStart: boolean) {
        this._isStart = isStart;
    }

    public get isEnd(): boolean {
        return this._isEnd;
    }

    public set isEnd(isEnd: boolean) {
        this._isEnd = isEnd;
    }
}

export default GameData;