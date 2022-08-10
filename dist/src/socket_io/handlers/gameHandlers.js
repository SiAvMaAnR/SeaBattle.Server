"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketTool_1 = __importDefault(require("../socketTool"));
const gameHandlers = ({ io, socket, gameService }) => {
    const tool = new socketTool_1.default(io, socket);
    const initBattle = (y, x) => {
        const field = gameService.addShip(y, x).getMyFieldArr();
        socket.emit("battle:init", field);
    };
    socket.on("battle:init", initBattle);
};
exports.default = gameHandlers;
//# sourceMappingURL=gameHandlers.js.map