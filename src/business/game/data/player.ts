import EnemyField from "../fields/enemyField";
import Field from "../fields/field";
import MyField from "../fields/myField";

class Player {

    private _socketId: string;
    private _isMove: boolean = false;
    private _isInit: boolean = false;
    private _isReady: boolean = false;
    private _isWin: boolean = false;
    private _myField: MyField = new MyField();
    private _enemyField: EnemyField = new EnemyField();


    constructor(socketId: string) {
        this._socketId = socketId;
    }

    public get isMove() {
        return this._isMove;
    }

    public setIsMove(isMove: boolean): boolean {
        this._isMove = isMove;
        return this._isMove;
    }

    public get isWin() {
        return this._isWin;
    }

    public setIsWin(isWin: boolean) {
        this._isWin = isWin;
    }

    public get isInit(): boolean {
        return this._isInit;
    }

    public setIsInit(isInit: boolean) {
        this._isInit = isInit;
    }

    public get isReady(): boolean {
        return this._isReady;
    }

    public setIsReady(isReady: boolean) {
        this._isReady = isReady;
    }

    public get socketId(): string {
        return this._socketId;
    }

    public get myField(): MyField {
        return this._myField;
    }

    public get enemyField(): EnemyField {
        return this._enemyField;
    }

    public restart() {
        this._isMove = false;
        this._isInit = false;
        this._isReady = false;
        this._myField = new MyField();
        this._enemyField = new EnemyField();
    }
}

export default Player;