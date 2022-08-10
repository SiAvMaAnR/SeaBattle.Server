import EnemyField from "./enemyField";
import MyField from "./myField";

class GameData {
    private myField: MyField = new MyField();
    private enemyField: EnemyField = new EnemyField();
    private roomId: string = "queue";

    constructor(roomId: string) {
        this.roomId = roomId;
    }

    public getMyField(): MyField {
        return this.myField;
    }

    public getEnemyField(): EnemyField {
        return this.enemyField;
    }

    public getRoomId(): string {
        return this.roomId;
    }
}

export default GameData;