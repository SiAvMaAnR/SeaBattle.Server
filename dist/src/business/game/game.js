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
        const isSuccess = (_a = this.core.getRoomByPlayer(socketId)) === null || _a === void 0 ? void 0 : _a.removePlayer(socketId);
        this.core.removeEmptyRooms();
        return isSuccess;
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
}
exports.default = Game;
//# sourceMappingURL=game.js.map