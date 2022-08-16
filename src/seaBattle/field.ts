import Cell from "../enums/cell";

abstract class Field {

    protected field: number[][] = [
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
    }

    public getArr(): number[][] {
        return this.field;
    }

    public edit(cell: Cell, y: number, x: number) {
        const length = this.field.length;

        if (y < length && x < length) {
            this.field[y][x] = cell;
        }
    }

    public add(y: number, x: number) {
        const length = this.field.length;

        if (y < length && x < length) {
            this.field[y][x] = Cell.Exists;
        }
    }

    public getCell(y: number, x: number): Cell {
        return this.field[y][x];
    }

}

export default Field;