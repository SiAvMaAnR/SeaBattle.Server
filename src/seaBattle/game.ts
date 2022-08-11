import Cell from "../enums/cell";
import EnemyField from "./enemyField";
import EnemyGameData from "./enemyField";
import GameData from "./gameData";
import MyField from "./myField";
import MyGameData from "./myField";

class Game {
    private gameData: GameData;

    constructor(roomId: string, nickName: string) {
        this.gameData = new GameData(roomId, nickName);
    }

    public getIsMyMove(): boolean {
        return this.gameData.getIsMyMove();
    }

    public setIsMyMove(isMyMove: boolean) {
        this.gameData.setIsMyMove(isMyMove);
    }

    public getName(): string {
        return this.gameData.getName();
    }

    public setName(name: string): void {
        this.gameData.setName(name);
    }

    public getRoom(): string {
        return this.gameData.getRoomId();
    }

    public getMyField(): MyField {
        return this.gameData.getMyField();
    }

    public getEnemyField(): EnemyField {
        return this.gameData.getEnemyField();
    }

}

export default Game;