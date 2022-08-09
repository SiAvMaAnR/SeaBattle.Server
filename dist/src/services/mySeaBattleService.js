"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("./baseService"));
class MySeaBattleService extends baseService_1.default {
    constructor() {
        super();
        this.battleground = [
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
        this.getBattleground = () => {
            return this.battleground;
        };
        this.getCell = ({ y, x }) => {
            return this.battleground[y][x];
        };
        this.apply = (cell, { y, x }) => {
            this.battleground[y][x] = cell;
        };
        this.removeShip = ({ y, x }) => {
            this.battleground[y][x] = 0 /* Cell.Empty */;
        };
        this.addShip = ({ y, x }) => {
            this.battleground[y][x] = 1 /* Cell.Added */;
        };
        this.shot = ({ y, x }) => {
            return this.getCell({ y, x }) == 1;
        };
        this.missShip = ({ y, x }) => {
            this.battleground[y][x] = 2 /* Cell.Missed */;
        };
        this.killShip = ({ y, x }) => {
            this.battleground[y][x] = 3 /* Cell.Killed */;
        };
    }
}
exports.default = MySeaBattleService;
//# sourceMappingURL=mySeaBattleService.js.map