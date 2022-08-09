import EnemyGameData from "./enemyField";
import GameData from "./gameData";
import MyGameData from "./myField";

class Game {
    private gameData: GameData;

    constructor() { }


    public init(roomId: string) {
        this.gameData = new GameData(roomId);
    }

    // public getData(): GameData {
    //     return this.gameData;
    // }

    public getRoom(): string {
        return this.gameData.getRoomId();
    }

    public start() {

    }

    public setPositionShips() {

    }

    public getMyField() {
        const field = this.gameData.getMyField();
        return field.get();
    }

    public getEnemyField() {
        const field = this.gameData.getEnemyField();
        return field.get();
    }






}

export default Game;