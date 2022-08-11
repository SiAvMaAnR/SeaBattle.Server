import EnemyField from "./enemyField";
import MyField from "./myField";

class GameData {
    private myField: MyField = new MyField();
    private enemyField: EnemyField = new EnemyField();
    private roomId: string = "none";
    private nickName: string = "none";
    private isMyMove: boolean = false;

    constructor(roomId: string, nickName: string) {
        this.roomId = roomId;
        this.nickName = nickName;
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

    public getRoomId(): string {
        return this.roomId;
    }

    public getName(): string {
        return this.nickName;
    }

    public setName(name: string): void {
        this.nickName = name;
    }
}

export default GameData;