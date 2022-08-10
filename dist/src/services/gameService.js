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
    startGame() {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.start();
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
    addShip(y, x) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().add(y, x);
        return this;
    }
    editMyField(cell, y, x) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.getMyField().edit(cell, y, x);
        return this;
    }
    editEnemyField(cell, y, x) {
        var _a;
        (_a = this.game) === null || _a === void 0 ? void 0 : _a.getEnemyField().edit(cell, y, x);
        return this;
    }
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map