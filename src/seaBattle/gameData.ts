import EnemyField from "./enemyField";
import MyField from "./myField";

class GameData {
    private myField: MyField = new MyField();
    private enemyField: EnemyField = new EnemyField();
    private roomId: string = "none";
    private nickName: string = "none";


    constructor(roomId: string, nickName: string) {
        this.roomId = roomId;
        this.nickName = nickName;
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

    public getName(): string {
        return this.nickName;
    }
}

export default GameData;