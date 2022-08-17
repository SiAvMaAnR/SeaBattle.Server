import EnemyField from "../fields/enemyField";
import MyField from "../fields/myField";
import Statistic from "./statistic";

class GameData {
    private _statistic: Statistic = new Statistic();

    constructor() {

    }

    public get statistic(): Statistic {
        return this._statistic;
    }
}

export default GameData;