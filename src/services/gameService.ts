import BaseService from "./baseService";
import Cell from "../enums/cell";
import ICoordinate from "../interfaces/common/ICoordinate";
import Game from "../seaBattle/game";

class GameService extends BaseService {

    private game: Game = new Game("");

    constructor() {
        super();
    }

    public newGame = (roomId: string): this => {
        this.game = new Game(roomId);
        return this;
    }

    public getRoomId = (): string => {
        return this.game.getRoom();
    }

    public startGame = (): this => {
        this.game.start();
        return this;
    }

    public getMyField = (): number[][] => {
        return this.game.getMyField();
    }

    public getEnemyField = (): number[][] => {
        return this.game.getEnemyField();
    }

    public addShip = (coordinates: ICoordinate[]): this => {
        this.game.addShips(coordinates);
        return this;
    }

    public editMyField = (cell: Cell, { y, x }: ICoordinate): this => {
        const field = this.game.getMyField();
        field[y][x] = cell;
        return this;
    }

    public editEnemyField = (cell: Cell, { y, x }: ICoordinate): this => {
        const field = this.game.getEnemyField();
        field[y][x] = cell;
        return this;
    }

    // public getCell = ({ y, x }: ICoordinate): Cell => {
    //     return this.battleground[y][x];
    // }



    // public removeShip = ({ y, x }: ICoordinate) => {
    //     this.battleground[y][x] = Cell.Empty;
    // }

    // public addShip = ({ y, x }: ICoordinate) => {
    //     this.battleground[y][x] = Cell.Added;
    // }

    // public shot = ({ y, x }: ICoordinate): boolean => {
    //     return this.getCell({ y, x }) == 1;
    // }

    // public missShip = ({ y, x }: ICoordinate) => {
    //     this.battleground[y][x] = Cell.Missed;
    // }

    // public killShip = ({ y, x }: ICoordinate) => {
    //     this.battleground[y][x] = Cell.Killed;
    // }

}

export default GameService;