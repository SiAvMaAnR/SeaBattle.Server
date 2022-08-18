"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    function start() {
        const roomId = gameService.getRoomByPlayer().id;
        if (!roomId)
            return;
        const isFullRoom = gameService.isFullRoom();
        console.log(isFullRoom);
        socket.emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: true
        });
        socket.broadcast.to(roomId).emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: false
        });
    }
    socket.on("game:start", start);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map