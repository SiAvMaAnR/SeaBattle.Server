"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("../business/game/data/core"));
const game_1 = __importDefault(require("../business/game/game"));
const gameService_1 = __importDefault(require("../services/gameService"));
const gameHandlers_1 = __importDefault(require("./handlers/gameHandlers"));
const roomHandlers_1 = __importDefault(require("./handlers/roomHandlers"));
const onConnection = (io, socket) => {
    const gameService = new gameService_1.default(socket.id, new game_1.default(core_1.default));
    const rand = Math.floor(Math.random() * 100);
    socket.data.name = rand.toString();
    (0, gameHandlers_1.default)({ io, socket, gameService });
    (0, roomHandlers_1.default)({ io, socket, gameService });
};
exports.default = onConnection;
//# sourceMappingURL=onConnection.js.map