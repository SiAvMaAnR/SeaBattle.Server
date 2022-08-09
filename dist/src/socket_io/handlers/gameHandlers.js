"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameService_1 = __importDefault(require("../../services/gameService"));
const gameHandlers = (io, socket) => {
    const gameService = new gameService_1.default();
    socket.on("battle:shot", (y, x) => {
        // const isHit = gameService.shot({ y, x });
        // socket.emit(`${isHit}`);
    });
    socket.on("battle:join", (roomId) => {
        gameService.newGame(roomId);
        const room = gameService.getRoomId();
        console.log(room);
        socket.join(room);
        const countSocketsInRoom = io.sockets.adapter.rooms.get(room).size;
        io.to(room).emit("battle:join", `${countSocketsInRoom}`);
        io.to(room).emit("battle:join", room);
    });
    socket.on("battle:test", (data) => {
        const room = gameService.getRoomId();
        io.to(room).emit("battle:test", "OK");
    });
    socket.on("battle:turn", (data) => {
    });
    socket.on("battle:end", (data) => {
    });
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map