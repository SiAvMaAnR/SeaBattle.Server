"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
const states_1 = __importDefault(require("./states"));
class Room {
    constructor(id, gameData) {
        this._players = [];
        this._id = id;
        this._states = gameData;
    }
    get states() {
        return this._states;
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
        if (this.count >= 2 || this._states.isAccess) {
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
        this._states = new states_1.default();
        this._players.forEach(player => player.restart());
    }
}
exports.default = Room;
//# sourceMappingURL=room.js.map