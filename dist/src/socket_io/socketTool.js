"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class SocketTool {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }
    getSizeRoom(roomId) {
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
    getSockets(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.io.to(roomId).fetchSockets();
        });
    }
    getUsers(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sockets = yield this.io.to(roomId).fetchSockets();
            return sockets.map(socket => socket.data["name"]).filter(socket => socket);
        });
    }
}
exports.default = SocketTool;
//# sourceMappingURL=socketTool.js.map