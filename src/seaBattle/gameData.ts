import EnemyFieldData from "./enemyField";
import MyFieldData from "./myField";

class GameData {
    private myField: MyFieldData = new MyFieldData();
    private enemyField: EnemyFieldData = new EnemyFieldData();
    private roomId: string;

    constructor(roomId: string) {
        this.roomId = roomId;
    }

    public getMyField(): MyFieldData {
        return this.myField;
    }

    public getEnemyField(): EnemyFieldData {
        return this.enemyField;
    }

    public getRoomId(): string {
        return this.roomId;
    }
}

export default GameData;