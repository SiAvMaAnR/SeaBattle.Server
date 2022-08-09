import BaseService from "./baseService";
import Cell from "../enums/cell";
import ICoordinate from "../interfaces/common/ICoordinate";
import Game from "../seaBattle/game";

class GameService extends BaseService {

    private game: Game = null;

    constructor() {
        super();
    }


    

    public createGame = (): this => {
        this.game = new Game();
        return this;
    }

    public getRoomId(){
        return this.game.getRoom();
    }

    public initGame = (roomId: string): this => {
        this.game.init(roomId);
        return this;
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