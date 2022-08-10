"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketTool {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }
    getCountInRoom(roomId) {
        var _a;
        return ((_a = this.io.sockets.adapter.rooms.get(roomId)) === null || _a === void 0 ? void 0 : _a.size) || 0;
    }
    getRooms() {
        return this.io.sockets.adapter.rooms;
    }
    getSocketsInRoom(roomId) {
        return this.io.sockets.adapter.rooms[roomId].sockets;
    }
}
exports.default = SocketTool;
//# sourceMappingURL=socketTool.js.map