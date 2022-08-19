"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
class Room {
    constructor(id, gameData) {
        this._players = [];
        this._id = id;
        this._gameData = gameData;
    }
    get gameData() {
        return this._gameData;
    }
    get count() {
        return this._players.length;
    }
    get id() {
        return this._id;
    }
    get players() {
        return this._players;
    }
    addPlayer(socketId) {
        if (this.count >= 2 || this._gameData.isAccess) {
            return false;
        }
        this._players.push(new player_1.default(socketId));
        return true;
    }
    getMyPlayer(socketId) {
        return this._players.find(player => player.socketId == socketId);
    }
    getEnemyPlayer(socketId) {
        return this._players.find(player => player.socketId != socketId);
    }
    removePlayer(sokcetId) {
        this._players = this._players.filter(player => player.socketId != sokcetId);
        return true;
    }
    isFullRoom() {
        return this.count >= 2;
    }
    restart() {
        this._gameData.setIsEnd(false);
        this._gameData.setIsStart(false);
        this._gameData.setIsAccess(false);
        this._players.forEach(player => player.restart());
    }
}
exports.default = Room;
//# sourceMappingURL=room.js.map