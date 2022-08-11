"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    function initGame(coordinates) {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();
        socket.emit("game:field:init", field);
    }
    function shootGame(coordinate) {
        const roomId = gameService.getRoomId();
        socket.to(roomId).emit("game:shoot", coordinate);
    }
    function shootResultGame(coordinate) {
        const roomId = gameService.getRoomId();
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == 1 /* Cell.Exists */);
        const newCell = isHit ? 3 /* Cell.Killed */ : 2 /* Cell.Missed */;
        gameService.editEnemyField(newCell, coordinate);
        io.to(roomId).emit("game:shoot:result", isHit);
    }
    function getMyFieldGame() {
        const field = gameService.getMyFieldArr();
        socket.emit("game:field:my", field);
    }
    function getEnemyFieldGame() {
        const field = gameService.getEnemyFieldArr();
        socket.emit("game:field:enemy", field);
    }
    socket.on("game:field:init", initGame);
    socket.on("game:field:my", getMyFieldGame);
    socket.on("game:field:enemy", getEnemyFieldGame);
    socket.on("game:shoot", shootGame);
    socket.on("game:shoot:result", shootResultGame);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map