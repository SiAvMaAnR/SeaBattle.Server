import EnemyField from "./enemyField";
import MyField from "./myField";

class GameData {
    private myField: MyField = new MyField();
    private enemyField: EnemyField = new EnemyField();
    private isMyMove: boolean = false;
    private isStart: boolean = false;

    public getIsStart(): boolean {
        return this.isStart;
    }

    public setIsStart(isStart: boolean): void {
        this.isStart = isStart;
    }

    public getIsMyMove(): boolean {
        return this.isMyMove;
    }

    public setIsMyMove(isMyMove: boolean): void {
        this.isMyMove = isMyMove;
    }

    public getMyField(): MyField {
        return this.myField;
    }

    public getEnemyField(): EnemyField {
        return this.enemyField;
    }
}

export default GameData;