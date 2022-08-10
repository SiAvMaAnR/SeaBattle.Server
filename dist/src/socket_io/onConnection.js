"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameService_1 = __importDefault(require("../services/gameService"));
const gameHandlers_1 = __importDefault(require("./handlers/gameHandlers"));
const roomHandlers_1 = __importDefault(require("./handlers/roomHandlers"));
const onConnection = (io, socket) => {
    const gameService = new gameService_1.default();
    (0, gameHandlers_1.default)({ io, socket, gameService });
    (0, roomHandlers_1.default)({ io, socket, gameService });
};
exports.default = onConnection;
//# sourceMappingURL=onConnection.js.map