import EnemyField from "../fields/enemyField";
import MyField from "../fields/myField";
import Statistic from "./statistic";

class GameData {
    private statistic: Statistic = new Statistic();
    private myField: MyField = new MyField();
    private enemyField: EnemyField = new EnemyField();


    constructor(){

    }


    

}

export default GameData;