"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameHandlers_1 = __importDefault(require("./handlers/gameHandlers"));
const roomHandlers_1 = __importDefault(require("./handlers/roomHandlers"));
const room_1 = __importDefault(require("./room"));
const onConnection = (io, socket) => {
    const room = new room_1.default();
    const rand = Math.floor(Math.random() * 100);
    socket.data.name = rand.toString();
    (0, gameHandlers_1.default)({ io, socket, room });
    (0, roomHandlers_1.default)({ io, socket, room });
};
exports.default = onConnection;
//# sourceMappingURL=onConnection.js.map