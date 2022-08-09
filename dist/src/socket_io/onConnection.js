"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seaBattleHandlers_1 = __importDefault(require("./handlers/seaBattleHandlers"));
const onConnection = (io, socket) => {
    (0, seaBattleHandlers_1.default)(io, socket);
};
exports.default = onConnection;
//# sourceMappingURL=onConnection.js.map