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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService, room }) => {
    const tool = new socketTool_1.default(io, socket);
    function init(coordinates) {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();
        socket.emit("game:field:init", field);
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
            console.log("CREATE");
        }
    }
    function remove() {
        if (room.get()) {
            gameService.deleteGame();
            console.log("REMOVE");
        }
    }
    function shootInit(coordinate) {
        const roomId = room.get();
        if (!roomId)
            return;
        socket.to(roomId).emit("game:shoot:init", coordinate);
    }
    function shootProcess(coordinate) {
        const roomId = room.get();
        if (!roomId)
            return;
        const isMyMove = gameService.getIsMyMove();
        if (!isMyMove)
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
        return __awaiter(this, void 0, void 0, function* () {
            const roomId = room.get();
            const sockets = yield tool.getSockets(roomId);
            sockets.forEach(socket => console.log(socket.data.name));
        });
    }
    socket.on("game:field:init", init);
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