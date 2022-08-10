import Cell from "../enums/cell";
import EnemyField from "./enemyField";
import EnemyGameData from "./enemyField";
import GameData from "./gameData";
import MyField from "./myField";
import MyGameData from "./myField";

class Game {
    private gameData: GameData;
    private nickName: string;

    constructor(roomId: string) {
        this.gameData = new GameData(roomId);
    }


    public getRoom(): string {
        return this.gameData.getRoomId();
    }

    public start() {

    }

    public end(){
        
    }


    public getMyField(): MyField {
        return this.gameData.getMyField();
    }

    public getEnemyField(): EnemyField {
        return this.gameData.getEnemyField();
    }

}

export default Game;