import BaseService from "./baseService";
import Cell from "../enums/cell";
import Game from "../seaBattle/game";
import Coordinate from "../types/coordinate";

class GameService extends BaseService {

    private game: Game = null;

    constructor() {
        super();
    }

    public initMyField(field: number[][]): this {
        this.game?.init(field);
        return this;
    }

    public getIsStart(): boolean {
        return this.game?.getIsStart();
    }

    public setIsStart(isStart: boolean): this {
        this.game?.setIsStart(isStart);
        return this;
    }

    public getIsMyMove(): boolean {
        return this.game?.getIsMyMove();
    }

    public setIsMyMove(isMyMove: boolean): this {
        this.game?.setIsMyMove(isMyMove);
        return this;
    }

    public createGame(): this {
        this.game = new Game();
        return this;
    }

    public deleteGame(): this {
        this.game = null;
        return this;
    }

    public getMyFieldArr(): number[][] {
        return this.game?.getMyField().getArr();
    }

    public getEnemyFieldArr(): number[][] {
        return this.game?.getEnemyField().getArr();
    }

    public editMyField(cell: Cell, coordinate: Coordinate): this {
        this.game?.getMyField().edit(cell, coordinate.y, coordinate.x);
        return this;
    }

    public editEnemyField(cell: Cell, coordinate: Coordinate): this {
        this.game?.getEnemyField().edit(cell, coordinate.y, coordinate.x);
        return this;
    }

    public getMyCell(coordinate: Coordinate): Cell {
        return this.game?.getMyField().getCell(coordinate.y, coordinate.x);
    }

    public getEnemyCell(coordinate: Coordinate): Cell {
        return this.game?.getEnemyField().getCell(coordinate.y, coordinate.x);
    }

    public checkDefeat(): boolean {
        const myField = this.game?.getMyField().getArr();
        return myField.flat().filter(cell => cell == Cell.Exists).length == 0;
    }
}

export default GameService;