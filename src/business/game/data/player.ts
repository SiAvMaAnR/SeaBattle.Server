import EnemyField from "../fields/enemyField";
import MyField from "../fields/myField";

class Player {
    private _socketId: string;
    private _name: string = "NO NAME";
    private _init: boolean = false;
    private _ready: boolean = false;
    private _myField: MyField = new MyField();
    private _enemyField: EnemyField = new EnemyField();


    constructor(socketId: string, name?: string) {
        this._socketId = socketId;
        this._name = name ?? "NONE";
    }

    public get name(): string {
        return this._name;
    }

    public set init(init: boolean) {
        this._init = init;
    }

    public get init(): boolean {
        return this._init;
    }

    public set ready(ready: boolean) {
        this._ready = ready;
    }

    public get ready(): boolean {
        return this._ready;
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
}

export default Player;