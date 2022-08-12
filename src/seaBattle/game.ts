import Cell from "../enums/cell";
import EnemyField from "./enemyField";
import EnemyGameData from "./enemyField";
import GameData from "./gameData";
import MyField from "./myField";
import MyGameData from "./myField";

class Game {
    private gameData: GameData;

    constructor() {
        this.gameData = new GameData();
    }

    public getIsStart(): boolean {
        return this.gameData.getIsStart();
    }

    public setIsStart(isStart: boolean): void {
        this.gameData.setIsStart(isStart);
    }

    public getIsMyMove(): boolean {
        return this.gameData.getIsMyMove();
    }

    public setIsMyMove(isMyMove: boolean) {
        this.gameData.setIsMyMove(isMyMove);
    }

    public getMyField(): MyField {
        return this.gameData.getMyField();
    }

    public getEnemyField(): EnemyField {
        return this.gameData.getEnemyField();
    }

}

export default Game;