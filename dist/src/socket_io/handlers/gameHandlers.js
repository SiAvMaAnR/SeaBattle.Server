"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    const initBattle = (coordinates) => {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();
        socket.emit("battle:init", field);
    };
    const shotBattle = (coordinate) => {
        const roomId = gameService.getRoomId();
        socket.to(roomId).emit("battle:shoot", coordinate);
    };
    socket.on("battle:init", initBattle);
    socket.on("battle:shoot", shotBattle);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map