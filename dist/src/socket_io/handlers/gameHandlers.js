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
        socket.to(roomId).emit("game:shoot:init", coordinate);
    }
    function shootProcessGame(coordinate) {
        const isMyMove = gameService.getIsMyMove();
        if (!isMyMove)
            return;
        const roomId = gameService.getRoomId();
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == 1 /* Cell.Exists */);
        io.to(roomId).emit("game:shoot:process", isHit, coordinate);
    }
    function shootResultGame(isHit, coordinate) {
        const isMyMove = gameService.getIsMyMove();
        const cell = (isHit) ? 3 /* Cell.Killed */ : 2 /* Cell.Missed */;
        const service = (isMyMove)
            ? gameService.editEnemyField(cell, coordinate).setIsMyMove(isHit)
            : gameService.editMyField(cell, coordinate).setIsMyMove(!isHit);
        socket.emit("game:shoot:result", {
            myField: service.getMyFieldArr(),
            enemyField: service.getEnemyFieldArr()
        });
    }
    function getMyFieldGame() {
        const field = gameService.getMyFieldArr();
        socket.emit("game:field:my", field);
    }
    function getEnemyFieldGame() {
        const field = gameService.getEnemyFieldArr();
        socket.emit("game:field:enemy", field);
    }
    function getIsMyMove() {
        const isMyMove = gameService.getIsMyMove();
        socket.emit("game:move", isMyMove);
    }
    socket.on("game:field:init", initGame);
    socket.on("game:field:my", getMyFieldGame);
    socket.on("game:field:enemy", getEnemyFieldGame);
    socket.on("game:shoot:init", shootGame);
    socket.on("game:shoot:process", shootProcessGame);
    socket.on("game:shoot:result", shootResultGame);
    socket.on("game:move", getIsMyMove);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map