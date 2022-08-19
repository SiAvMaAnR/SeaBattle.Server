"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(core) {
        this.core = core;
    }
    joinRoom(roomId, socketId) {
        var _a;
        return (_a = this.core.getRoomById(roomId)) === null || _a === void 0 ? void 0 : _a.addPlayer(socketId);
    }
    leaveRoom(socketId) {
        var _a;
        return (_a = this.core.getRoomByPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.removePlayer(socketId);
    }
    removeEmptyRooms() {
        this.core.removeEmptyRooms();
    }
    getPlayers(socketId) {
        const room = this.core.getRoomByPlayer(socketId);
        if (!room)
            return null;
        return {
            my: room.getMyPlayer(socketId),
            enemy: room.getEnemyPlayer(socketId)
        };
    }
    createRoom(roomId) {
        return this.core.addRoom(roomId);
    }
    isExistsRoom(roomId) {
        return this.core.isExistsRoom(roomId);
    }
    getRooms() {
        return this.core.rooms;
    }
    getRoomById(roomId) {
        return this.core.getRoomById(roomId);
    }
    getRoomByPlayer(socketId) {
        return this.core.getRoomByPlayer(socketId);
    }
    isFullRoom(socketId) {
        var _a;
        return (_a = this.core.getRoomByPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.isFullRoom();
    }
    getMyField(socketId) {
        var _a;
        return (_a = this.core.getMyPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.myField;
    }
    getEnemyField(socketId) {
        var _a;
        return (_a = this.core.getMyPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.enemyField;
    }
    getIsMove(socketId) {
        var _a;
        return (_a = this.core.getMyPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.isMove;
    }
    checkWin(socketId) {
        var _a;
        return (_a = this.core.getEnemyPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.myField.isDeadField();
    }
    setIsReady(socketId, isReady) {
        var _a;
        (_a = this.core.getMyPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.setIsReady(isReady);
    }
    setIsInit(socketId, isInit) {
        var _a;
        (_a = this.core.getMyPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.setIsInit(isInit);
    }
    setIsAccess(socketId, isAccess) {
        var _a, _b;
        (_b = (_a = this.core.getRoomByPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.gameData) === null || _b === void 0 ? void 0 : _b.setIsAccess(isAccess);
    }
    shoot(socketId, coordinate) {
        const myPlayer = this.core.getMyPlayer(socketId);
        const enemyPlayer = this.core.getEnemyPlayer(socketId);
        if (!coordinate || !myPlayer || !enemyPlayer) {
            return null;
        }
        const isCorrect = myPlayer.enemyField.getCell(coordinate.y, coordinate.x) == 0 /* Cell.Empty */;
        if (!isCorrect) {
            return null;
        }
        const isHit = enemyPlayer.myField.getCell(coordinate.y, coordinate.x) == 1 /* Cell.Exists */;
        const cell = isHit ? 3 /* Cell.Killed */ : 2 /* Cell.Missed */;
        myPlayer.enemyField.edit(cell, coordinate.y, coordinate.x);
        enemyPlayer.myField.edit(cell, coordinate.y, coordinate.x);
        myPlayer.setIsMove(isHit);
        enemyPlayer.setIsMove(!isHit);
        return isHit;
    }
    iWon(socketId, isWon) {
        const room = this.getRoomByPlayer(socketId);
        const myPlayer = this.core.getMyPlayer(socketId);
        const enemyPlayer = this.core.getEnemyPlayer(socketId);
        if (!room || !myPlayer || !enemyPlayer) {
            return;
        }
        myPlayer.setIsWin(isWon);
        enemyPlayer.setIsWin(!isWon);
        room.gameData.setIsEnd(true);
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map