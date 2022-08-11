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
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    function joinRoom(roomId) {
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
        gameService.createGame(roomId, socket.id);
        socket.data.name = gameService.getName();
        socket.join(roomId);
        io.to(roomId).emit("rooms:join", true, `Success, ${socket.data['name']} join!`);
    }
    function leaveRoom(roomId) {
        const isMissingRoom = gameService.getRoomId() != roomId;
        if (isMissingRoom) {
            socket.emit("rooms:leave", false, "You are not in this room!");
            return;
        }
        gameService.deleteGame();
        io.to(roomId).emit("rooms:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(roomId);
    }
    function getRooms() {
        socket.emit("rooms:get:all", tool.getRooms());
    }
    function getRoom() {
        const room = gameService.getRoomId();
        socket.emit("rooms:get:current", room);
    }
    function getUsers(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield tool.getUsersInRoom(roomId);
            socket.emit("rooms:users", users);
        });
    }
    socket.on("rooms:join", joinRoom);
    socket.on("rooms:leave", leaveRoom);
    socket.on("rooms:get:all", getRooms);
    socket.on("rooms:get:current", getRoom);
    socket.on("rooms:users", getUsers);
};
exports.default = gameHandlers;
//# sourceMappingURL=roomHandlers.js.map