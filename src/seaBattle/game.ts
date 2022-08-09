import Cell from "../enums/cell";
import ICoordinate from "../interfaces/common/ICoordinate";
import EnemyGameData from "./enemyField";
import GameData from "./gameData";
import MyGameData from "./myField";

class Game {
    private gameData: GameData;


    constructor(roomId: string) {
        this.gameData = new GameData(roomId);
    }


    public getRoom = (): string => {
        return this.gameData.getRoomId();
    }

    public start = () => {

    }

    public addShips = (coordinates: ICoordinate[]): void => {

        const field = this.gameData.getMyField();

        coordinates.forEach(c => field[c.y][c.x] = Cell.Added);
    }

    public getMyField = (): number[][] => {
        const field = this.gameData.getMyField();
        return field.get();
    }

    public getEnemyField = (): number[][] => {
        const field = this.gameData.getEnemyField();
        return field.get();
    }

}

export default Game;