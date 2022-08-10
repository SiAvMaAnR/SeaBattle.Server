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
        this.getMyCell = (coordinate) => {
            var _a;
            return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().getCell(coordinate.y, coordinate.x);
        };
        this.getEnemyCell = (coordinate) => {
            var _a;
            return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getEnemyField().getCell(coordinate.y, coordinate.x);
        };
    }
    createGame(roomId, nickName) {
        this.game = new game_1.default(roomId, nickName);
        return this;
    }
    deleteGame() {
        this.game = null;
        return this;
    }
    getRoomId() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getRoom();
    }
    getMyFieldArr() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().getArr();
    }
    getEnemyFieldArr() {
        var _a;
        return (_a = this.game) === null || _a === void 0 ? void 0 : _a.getEnemyField().getArr();
    }
    addShips(coordinates) {
        var _a;
        const field = (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField();
        if (field) {
            coordinates.forEach(c => field.add(c.y, c.x));
        }
        return this;
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
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map