import BaseService from "./baseService";
import Cell from "../enums/cell";
import Game from "../seaBattle/game";
import Coordinate from "../types/coordinate";

class GameService extends BaseService {

    private game: Game = null;

    constructor() {
        super();
    }

    public createGame(roomId: string, nickName: string): this {
        this.game = new Game(roomId, nickName);
        return this;
    }

    public deleteGame(): this {
        this.game = null;
        return this;
    }

    public getRoomId(): string {
        return this.game?.getRoom();
    }


    public getMyFieldArr(): number[][] {
        return this.game?.getMyField().getArr();
    }

    public getEnemyFieldArr(): number[][] {
        return this.game?.getEnemyField().getArr();
    }

    public addShips(coordinates: Coordinate[]): this {
        const field = this.game?.getMyField();

        if (field) {
            coordinates.forEach(c => field.add(c.y, c.x));
        }
        return this;
    }

    public editMyField(cell: Cell, y: number, x: number): this {
        this.game?.getMyField().edit(cell, y, x);
        return this;
    }

    public editEnemyField(cell: Cell, y: number, x: number): this {
        this.game?.getEnemyField().edit(cell, y, x);
        return this;
    }

    public getCell = (y: number, x: number): Cell => {
        return this.game?.getEnemyField().getCell(y, x);
    }
}

export default GameService;