"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    function initBattle(coordinates) {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();
        socket.emit("battle:field:init", field);
    }
    function shootBattle(coordinate) {
        const roomId = gameService.getRoomId();
        socket.to(roomId).emit("battle:shoot", coordinate);
    }
    function shootResultBattle(coordinate) {
        const roomId = gameService.getRoomId();
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == 1 /* Cell.Exists */);
        io.to(roomId).emit("battle:shoot:result", isHit);
    }
    function getMyFieldBattle() {
        const field = gameService.getMyFieldArr();
        socket.emit("battle:field:my", field);
    }
    function getEnemyFieldBattle() {
        const field = gameService.getEnemyFieldArr();
        socket.emit("battle:field:enemy", field);
    }
    socket.on("battle:field:init", initBattle);
    socket.on("battle:field:my", getMyFieldBattle);
    socket.on("battle:field:enemy", getEnemyFieldBattle);
    socket.on("battle:shoot", shootBattle);
    socket.on("battle:shoot:result", shootResultBattle);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map