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
        const allRooms = Array.from(this.io.sockets.adapter.rooms);
        const activeRooms = allRooms.filter(room => !room[1].has(room[0]));
        const result = activeRooms.map(i => {
            var _a;
            return {
                room: i[0],
                count: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.size
            };
        });
        return result;
    }
    getSocketsInRoom(roomId) {
        return this.io.sockets.adapter.rooms[roomId].sockets;
    }
}
exports.default = SocketTool;
//# sourceMappingURL=socketTool.js.map