"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameService_1 = __importDefault(require("../../services/gameService"));
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, room }) => {
    const gameService = new gameService_1.default();
    const tool = new socketTool_1.default(io, socket);
    function initField(field) {
        const myField = gameService.initMyField(field).getMyFieldArr();
        socket.emit("game:field:init", myField);
    }
    function start() {
        const roomId = room.get();
        if (!roomId)
            return;
        const isFullRoom = tool.getSizeRoom(roomId) == 2;
        socket.emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: true
        });
        socket.broadcast.to(roomId).emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: false
        });
    }
    function create(isFirstMove) {
        if (room.get()) {
            gameService.createGame();
            gameService.setIsMyMove(isFirstMove);
        }
    }
    function remove() {
        if (room.get()) {
            gameService.deleteGame();
        }
    }
    function shootInit(coordinate) {
        const roomId = room.get();
        if (!roomId)
            return;
        const isMyMove = gameService.getIsMyMove();
        if (!isMyMove)
            return;
        const enemyField = gameService.getEnemyFieldArr();
        if (enemyField[coordinate.y][coordinate.x] != 0)
            return;
        socket.to(roomId).emit("game:shoot:init", coordinate);
    }
    function shootProcess(coordinate) {
        const roomId = room.get();
        if (!roomId)
            return;
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == 1 /* Cell.Exists */);
        io.to(roomId).emit("game:shoot:process", isHit, coordinate);
    }
    function shootResult(isHit, coordinate) {
        const isMyMove = gameService.getIsMyMove();
        const cell = (isHit) ? 3 /* Cell.Killed */ : 2 /* Cell.Missed */;
        const service = (isMyMove)
            ? gameService.editEnemyField(cell, coordinate).setIsMyMove(isHit)
            : gameService.editMyField(cell, coordinate).setIsMyMove(!isHit);
        socket.emit("game:shoot:result", {
            myField: service.getMyFieldArr(),
            enemyField: service.getEnemyFieldArr()
        });
        if (isMyMove)
            return;
        const isEnemyWon = gameService.checkDefeat();
        if (isEnemyWon) {
            const roomId = room.get();
            socket.broadcast.to(roomId).emit("game:result", true);
            socket.emit("game:result", false);
        }
    }
    function getMyField() {
        const field = gameService.getMyFieldArr();
        socket.emit("game:field:my", field);
    }
    function getEnemyField() {
        const field = gameService.getEnemyFieldArr();
        socket.emit("game:field:enemy", field);
    }
    function getIsMyMove() {
        const isMyMove = gameService.getIsMyMove();
        socket.emit("game:move", isMyMove);
    }
    function ready() {
        const roomId = room.get();
        if (!roomId)
            return;
        io.to(roomId).emit("game:ready", true);
    }
    socket.on("game:field:init", initField);
    socket.on("game:field:my", getMyField);
    socket.on("game:field:enemy", getEnemyField);
    socket.on("game:shoot:init", shootInit);
    socket.on("game:shoot:process", shootProcess);
    socket.on("game:shoot:result", shootResult);
    socket.on("game:move", getIsMyMove);
    socket.on("game:start", start);
    socket.on("game:create", create);
    socket.on("game:remove", remove);
    socket.on("game:ready", ready);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map