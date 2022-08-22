"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("./baseService"));
class GameService extends baseService_1.default {
    constructor(socketId, game) {
        super();
        this.socketId = socketId;
        this.game = game;
    }
    joinRoom(roomId) {
        if (!this.game.isExistsRoom(roomId)) {
            this.game.createRoom(roomId);
        }
        return this.game.joinRoom(roomId, this.socketId);
    }
    leaveRoom() {
        this.game.leaveRoom(this.socketId);
        this.game.removeEmptyRooms();
    }
    getRooms() {
        return this.game.getRooms().map((room, index) => {
            return {
                index: index,
                id: room.id,
                count: room.count
            };
        });
    }
    getRoomById(roomId) {
        const room = this.game.getRoomById(roomId);
        if (!room) {
            return null;
        }
        return {
            id: room.id,
            count: room.count
        };
    }
    getRoomByPlayer() {
        const room = this.game.getRoomByPlayer(this.socketId);
        if (!room) {
            return null;
        }
        return {
            id: room.id,
            count: room.count
        };
    }
    getPlayers() {
        var _a, _b, _c, _d, _e, _f;
        const players = this.game.getPlayers(this.socketId);
        return {
            my: {
                socket: (_a = players === null || players === void 0 ? void 0 : players.my) === null || _a === void 0 ? void 0 : _a.socketId,
                init: (_b = players === null || players === void 0 ? void 0 : players.my) === null || _b === void 0 ? void 0 : _b.isInit,
                ready: (_c = players === null || players === void 0 ? void 0 : players.my) === null || _c === void 0 ? void 0 : _c.isReady
            },
            enemy: {
                socket: (_d = players === null || players === void 0 ? void 0 : players.enemy) === null || _d === void 0 ? void 0 : _d.socketId,
                init: (_e = players === null || players === void 0 ? void 0 : players.enemy) === null || _e === void 0 ? void 0 : _e.isInit,
                ready: (_f = players === null || players === void 0 ? void 0 : players.enemy) === null || _f === void 0 ? void 0 : _f.isReady
            }
        };
    }
    isFullRoom() {
        return this.game.isFullRoom(this.socketId);
    }
    getMyField() {
        var _a;
        return (_a = this.game.getMyField(this.socketId)) === null || _a === void 0 ? void 0 : _a.getArr();
    }
    getEnemyField() {
        var _a;
        return (_a = this.game.getEnemyField(this.socketId)) === null || _a === void 0 ? void 0 : _a.getArr();
    }
    initMyField(field) {
        var _a;
        return (_a = this.game.getMyField(this.socketId)) === null || _a === void 0 ? void 0 : _a.setField(field);
    }
    getIsMove() {
        return this.game.getIsMove(this.socketId);
    }
    moveGen(condition) {
        var _a, _b;
        const players = this.game.getPlayers(this.socketId);
        const myMove = (_a = players === null || players === void 0 ? void 0 : players.my) === null || _a === void 0 ? void 0 : _a.setIsMove(condition);
        const enemyMove = (_b = players === null || players === void 0 ? void 0 : players.enemy) === null || _b === void 0 ? void 0 : _b.setIsMove(!condition);
        return myMove != enemyMove;
    }
    checkWin() {
        return this.game.checkWin(this.socketId);
    }
    shoot(coordinate) {
        return this.game.shoot(this.socketId, coordinate);
    }
    setIsStart(isStart) {
        return this.game.getRoomByPlayer(this.socketId).states.setIsStart(isStart);
    }
    isEnd() {
        var _a;
        return (_a = this.game.getRoomByPlayer(this.socketId)) === null || _a === void 0 ? void 0 : _a.states.isEnd;
    }
    setIsEnd(isEnd) {
        this.game.getRoomByPlayer(this.socketId).states.setIsEnd(isEnd);
    }
    setIsReady(ready) {
        this.game.setIsReady(this.socketId, ready);
    }
    setIsInit(init) {
        this.game.setIsInit(this.socketId, init);
    }
    setIsAccess(access) {
        this.game.setIsAccess(this.socketId, access);
    }
    getStatistic() {
        return this.game.getStatistic(this.socketId);
    }
    saveResult(isWon) {
        this.game.saveResult(this.socketId, isWon);
    }
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map