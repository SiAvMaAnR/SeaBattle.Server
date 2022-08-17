import EnemyField from "../fields/enemyField";
import MyField from "../fields/myField";

class Player {
    private _socketId: string;
    private _myField: MyField = new MyField();
    private _enemyField: EnemyField = new EnemyField();


    constructor(socketId: string) {
        this._socketId = socketId;
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