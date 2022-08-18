"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
class Room {
    constructor(id) {
        this._players = [];
        this._id = id;
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
        if (this.count >= 2) {
            return false;
        }
        this._players.push(new player_1.default(socketId));
        return true;
    }
    getPlayer(socketId) {
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
}
exports.default = Room;
//# sourceMappingURL=room.js.map