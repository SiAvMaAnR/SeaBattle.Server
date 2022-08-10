"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameService_1 = __importDefault(require("../../services/gameService"));
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = (io, socket) => {
    const tool = new socketTool_1.default(io, socket);
    const gameService = new gameService_1.default();
    socket.on("battle:join", (roomId) => {
        if (tool.getCountInRoom(roomId) > 1) {
            socket.emit("battle:join", "Join: no");
            return;
        }
        const room = gameService.newGame(roomId).getRoomId();
        socket.join(room);
        socket.emit("battle:join", "Join: yes");
    });
    socket.on("battle:init", (y, x) => {
        const field = gameService.addShip(y, x)
            .getMyFieldArr();
        socket.emit("battle:init", field);
    });
    socket.on("battle:room", (data) => {
        const room = gameService.getRoomId();
        socket.emit("battle:room", room);
    });
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map