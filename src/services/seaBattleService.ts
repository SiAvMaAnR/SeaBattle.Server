import BaseService from "./baseService";
import Cell from "../enums/cell";
import ICoordinate from "../interfaces/common/ICoordinate";

class MySeaBattleService extends BaseService {
    private battleground: number[][] = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    constructor() {
        super();
    }

    public getBattleground = () => {
        return this.battleground;
    }

    public getCell = ({ y, x }: ICoordinate): Cell => {
        return this.battleground[y][x];
    }

    public apply = (cell: Cell, { y, x }: ICoordinate) => {
        this.battleground[y][x] = cell;
    }

    public removeShip = ({ y, x }: ICoordinate) => {
        this.battleground[y][x] = Cell.Empty;
    }

    public addShip = ({ y, x }: ICoordinate) => {
        this.battleground[y][x] = Cell.Added;
    }

    public shot = ({ y, x }: ICoordinate): boolean => {
        return this.getCell({ y, x }) == 1;
    }

    public missShip = ({ y, x }: ICoordinate) => {
        this.battleground[y][x] = Cell.Missed;
    }

    public killShip = ({ y, x }: ICoordinate) => {
        this.battleground[y][x] = Cell.Killed;
    }
}

export default MySeaBattleService;