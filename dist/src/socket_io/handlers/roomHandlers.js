"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    const joinRoom = (roomId) => {
        const isFull = tool.getCountInRoom(roomId) > 1;
        const isRoomExists = gameService === null || gameService === void 0 ? void 0 : gameService.getRoomId();
        if (isRoomExists) {
            socket.emit("rooms:join", false, "Room already exists!");
            return;
        }
        if (isFull) {
            socket.emit("rooms:join", false, "Full room!");
            return;
        }
        gameService.createGame(roomId, "user");
        socket.join(roomId);
        socket.emit("rooms:join", true, "Success!");
    };
    const leaveRoom = (roomId) => {
        const isMissingRoom = gameService.getRoomId() != roomId;
        if (isMissingRoom) {
            socket.emit("rooms:leave", false, "You are not in this room!");
            return;
        }
        gameService.deleteGame();
        socket.leave(roomId);
        socket.emit("rooms:leave", true, "Success!");
    };
    const getRooms = () => {
        socket.emit("rooms:get:all", tool.getRooms());
    };
    const getRoom = () => {
        const room = gameService.getRoomId();
        socket.emit("rooms:get:current", room);
    };
    socket.on("rooms:join", joinRoom);
    socket.on("rooms:leave", leaveRoom);
    socket.on("rooms:get:all", getRooms);
    socket.on("rooms:get:current", getRoom);
};
exports.default = gameHandlers;
//# sourceMappingURL=roomHandlers.js.map