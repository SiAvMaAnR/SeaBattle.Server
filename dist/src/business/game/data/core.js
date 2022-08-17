"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const room_1 = __importDefault(require("./room"));
class Core {
    constructor() {
        this._rooms = [];
    }
    get rooms() {
        return this._rooms;
    }
    getRoomById(roomId) {
        return this._rooms.find(room => room.id == roomId);
    }
    getRoomByPlayer(socketId) {
        return this._rooms.find(room => room.players.some(player => player.socketId == socketId));
    }
    addRoom(roomId) {
        const isExists = this._rooms.find(room => room.id == roomId);
        if (isExists) {
            return false;
        }
        const room = new room_1.default(roomId);
        this._rooms.push(room);
        return true;
    }
    removeRoom(roomId) {
        this._rooms = this._rooms.filter(room => room.id != roomId);
    }
    removeEmptyRooms() {
        this._rooms = this._rooms.filter(room => room.count != 0);
    }
    isExistsRoom(roomId) {
        return this._rooms.findIndex(room => room.id == roomId) !== -1;
    }
}
exports.Core = Core;
exports.default = new Core();
//# sourceMappingURL=core.js.map