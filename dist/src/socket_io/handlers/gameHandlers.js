"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statisticService_1 = __importDefault(require("../../services/statisticService"));
const gameHandlers = ({ io, socket, gameService }) => {
    const statisticService = new statisticService_1.default();
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
        gameService.setIsStart(isStart);
        io.to(roomId).emit("game:start", isStart);
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
        gameService.saveResult(win);
        socket.emit("game:check", win);
        socket.broadcast.to(roomId).emit("game:check", !win);
    }
    function saveStatistic() {
        var _a, _b;
        const userId = (_a = gameService.user) === null || _a === void 0 ? void 0 : _a.id;
        if (userId) {
            const statistic = gameService.getStatistic();
            if (!statistic) {
                return;
            }
            statistic.enemy = ((_b = gameService.getEnemy()) === null || _b === void 0 ? void 0 : _b.login) || "none";
            statisticService.addGame(userId, statistic);
        }
    }
    socket.on("game:start", start);
    socket.on("game:field:init", initField);
    socket.on("game:field:my", getMyField);
    socket.on("game:field:enemy", getEnemyField);
    socket.on("game:move", getIsMove);
    socket.on("game:shoot", shoot);
    socket.on("game:check", checkWin);
    socket.on("game:ready", ready);
    socket.on("game:statistic", saveStatistic);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map