
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
        const length = this.field.length;

        return (y < length && x < length)
            ? this.field[y][x]
            : null;
    }


    public isDeadField(): boolean {
        return this.field.flat().filter(cell => cell == Cell.Exists).length == 0;
    }
}

const enum Cell {
    Empty = 0,
    Exists = 1,
    Missed = 2,
    Killed = 3
}

type Coordinate = {
    y: number
    x: number
}


export { Cell, Coordinate };

export default Field;