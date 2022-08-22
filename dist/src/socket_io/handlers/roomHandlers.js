"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roomHandlers = ({ io, socket, gameService }) => {
    function join(roomId) {
        const room = gameService.getRoomByPlayer();
        if (room) {
            socket.emit("room:join", false, "You are already in this room!");
            return;
        }
        if (!gameService.joinRoom(roomId)) {
            socket.emit("room:join", false, "The room is full or the game has already started!");
            return;
        }
        socket.join(roomId);
        socket.emit("room:join", true, `Success, ${socket.data['name']} join!`);
    }
    function leave() {
        var _a;
        const roomId = (_a = gameService.getRoomByPlayer()) === null || _a === void 0 ? void 0 : _a.id;
        if (!roomId) {
            socket.emit("room:leave", false, "Room not found!");
            return;
        }
        gameService.saveResult(false);
        socket.emit("game:check", false);
        socket.broadcast.to(roomId).emit("game:check", true);
        gameService.leaveRoom();
        socket.emit("room:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(roomId);
    }
    function getAll() {
        const rooms = gameService.getRooms();
        socket.emit("room:get:all", rooms);
    }
    function getCurrent() {
        const room = gameService.getRoomByPlayer();
        socket.emit("room:get:current", room);
    }
    function isReadyPLayers() {
        var _a, _b, _c, _d, _e;
        const roomId = (_a = gameService.getRoomByPlayer()) === null || _a === void 0 ? void 0 : _a.id;
        if (!roomId)
            return;
        const players = gameService.getPlayers();
        const initAll = ((_b = players === null || players === void 0 ? void 0 : players.my) === null || _b === void 0 ? void 0 : _b.init) && ((_c = players === null || players === void 0 ? void 0 : players.enemy) === null || _c === void 0 ? void 0 : _c.init);
        const readyAll = ((_d = players === null || players === void 0 ? void 0 : players.my) === null || _d === void 0 ? void 0 : _d.ready) && ((_e = players === null || players === void 0 ? void 0 : players.enemy) === null || _e === void 0 ? void 0 : _e.ready);
        const isAccess = initAll && readyAll;
        gameService.setIsAccess(isAccess);
        io.to(roomId).emit("room:players:ready", isAccess);
    }
    socket.on("room:join", join);
    socket.on("room:leave", leave);
    socket.on("room:get:all", getAll);
    socket.on("room:get:current", getCurrent);
    socket.on("room:players:ready", isReadyPLayers);
    socket.on("disconnecting", leave);
};
exports.default = roomHandlers;
//# sourceMappingURL=roomHandlers.js.map