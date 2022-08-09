"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const cors_config_1 = __importDefault(require("../cors/cors.config"));
const socketInit = (server) => {
    const socket = new socket_io_1.Server(server, {
        cors: cors_config_1.default
    });
    return socket;
};
exports.default = socketInit;
//# sourceMappingURL=socket.js.map