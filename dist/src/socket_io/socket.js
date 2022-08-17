"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("../config/cors"));
const ioInit = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: cors_1.default
    });
    return io;
};
exports.default = ioInit;
//# sourceMappingURL=socket.js.map