"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("./baseService"));
const game_1 = __importDefault(require("../seaBattle/game"));
class GameService extends baseService_1.default {
    constructor() {
        super();
        this.game = null;
    }
    initMyField(field) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.init(field);
        return this;
    }
    getIsStart() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getIsStart();
    }
    setIsStart(isStart) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.setIsStart(isStart);
        return this;
    }
    getIsMyMove() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getIsMyMove();
    }
    setIsMyMove(isMyMove) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.setIsMyMove(isMyMove);
        return this;
    }
    createGame() {
        this.game = new game_1.default();
        return this;
    }
    deleteGame() {
        this.game = null;
        return this;
    }
    getMyFieldArr() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().getArr();
    }
    getEnemyFieldArr() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getEnemyField().getArr();
    }
    editMyField(cell, coordinate) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().edit(cell, coordinate.y, coordinate.x);
        return this;
    }
    editEnemyField(cell, coordinate) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.getEnemyField().edit(cell, coordinate.y, coordinate.x);
        return this;
    }
    getMyCell(coordinate) {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().getCell(coordinate.y, coordinate.x);
    }
    getEnemyCell(coordinate) {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getEnemyField().getCell(coordinate.y, coordinate.x);
    }
    checkDefeat() {
        var _a;
        const myField = (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().getArr();
        return myField.flat().filter(cell => cell == 1 /* Cell.Exists */).length == 0;
    }
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map