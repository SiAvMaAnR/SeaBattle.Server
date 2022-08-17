"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const roomHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    function join(roomId) {
        const room = gameService.getRoomByPlayer(socket.id);
        if (room) {
            socket.emit("room:join", false, "You are already in this room!");
            return;
        }
        if (!gameService.joinRoom(roomId)) {
            socket.emit("room:join", false, "Full room!");
            return;
        }
        socket.join(roomId);
        io.to(roomId).emit("room:join", true, `Success, ${socket.data['name']} join!`);
    }
    function leave() {
        const room = gameService.getRoomByPlayer(socket.id);
        if (!room) {
            socket.emit("room:leave", false, "Room not found!");
            return;
        }
        gameService.leaveRoom();
        io.to(room.id).emit("room:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(room.id);
    }
    function getAll() {
        const rooms = gameService.getRooms();
        socket.emit("room:get:all", rooms);
    }
    socket.on("room:join", join);
    socket.on("room:leave", leave);
    socket.on("room:get:all", getAll);
};
exports.default = roomHandlers;
//# sourceMappingURL=roomHandlers.js.map