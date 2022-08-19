"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameHandlers = ({ io, socket, gameService }) => {
    function start() {
        var _a;
        const roomId = (_a = gameService.getRoomByPlayer()) === null || _a === void 0 ? void 0 : _a.id;
        if (!roomId)
            return;
        const isStart = gameService.isFullRoom();
        if (!isStart)
            return;
        const isGen = gameService.moveGen(true);
        if (!isGen)
            return;
        gameService.setIsStart(true);
        socket.emit("game:start", isStart);
        socket.broadcast.to(roomId).emit("game:start", isStart);
    }
    function initField(field) {
        const myField = gameService.initMyField(field);
        gameService.setIsInit(true);
        socket.emit("game:field:init", myField);
    }
    function ready(isReady) {
        gameService.setIsReady(isReady);
        socket.emit("game:ready", isReady);
    }
    function getMyField() {
        const field = gameService.getMyField();
        socket.emit("game:field:my", field);
    }
    function getEnemyField() {
        const field = gameService.getEnemyField();
        socket.emit("game:field:enemy", field);
    }
    function getIsMove() {
        const isMove = gameService.getIsMove();
        socket.emit("game:move", isMove);
    }
    function shoot(coordinate) {
        var _a;
        const roomId = (_a = gameService.getRoomByPlayer()) === null || _a === void 0 ? void 0 : _a.id;
        const isMyMove = gameService.getIsMove();
        if (!roomId || !isMyMove)
            return;
        const isHit = gameService.shoot(coordinate);
        io.to(roomId).emit("game:shoot", isHit);
    }
    function checkWin() {
        var _a;
        const win = gameService.checkWin();
        const roomId = (_a = gameService.getRoomByPlayer()) === null || _a === void 0 ? void 0 : _a.id;
        if (!roomId || !win)
            return;
        gameService.setIsEnd(true);
        socket.emit("game:check", true);
        socket.broadcast.to(roomId).emit("game:check", false);
    }
    socket.on("game:start", start);
    socket.on("game:field:init", initField);
    socket.on("game:field:my", getMyField);
    socket.on("game:field:enemy", getEnemyField);
    socket.on("game:move", getIsMove);
    socket.on("game:shoot", shoot);
    socket.on("game:check", checkWin);
    socket.on("game:ready", ready);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map