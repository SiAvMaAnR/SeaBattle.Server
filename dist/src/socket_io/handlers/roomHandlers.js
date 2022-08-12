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
const roomHandlers = ({ io, socket, gameService, room }) => {
    const tool = new socketTool_1.default(io, socket);
    function join(roomId) {
        const isFull = tool.getSizeRoom(roomId) >= 2;
        const isRoomExists = room.get();
        if (isRoomExists) {
            socket.emit("room:join", false, "You are already in this room!");
            return;
        }
        if (isFull) {
            socket.emit("room:join", false, "Full room!");
            return;
        }
        socket.join(roomId);
        io.to(roomId).emit("room:join", true, `Success, ${socket.data['name']} join!`);
        room.set(roomId);
    }
    function leave(roomId) {
        const isMissingRoom = room.get() != roomId;
        if (isMissingRoom) {
            socket.emit("room:leave", false, "You are not in this room!");
            return;
        }
        io.to(roomId).emit("room:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(roomId);
        room.set(null);
    }
    function getAll() {
        socket.emit("room:get:all", tool.getRooms());
    }
    function getCurrent() {
        const roomId = room.get();
        socket.emit("room:get:current", roomId);
    }
    function getUsers(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield tool.getUsers(roomId);
            socket.emit("room:users", users);
        });
    }
    socket.on("room:join", join);
    socket.on("room:leave", leave);
    socket.on("room:get:all", getAll);
    socket.on("room:get:current", getCurrent);
    socket.on("room:users", getUsers);
};
exports.default = roomHandlers;
//# sourceMappingURL=roomHandlers.js.map