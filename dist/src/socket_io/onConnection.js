"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testHandlers_1 = __importDefault(require("./handlers/testHandlers"));
const onConnection = (io, socket) => {
    (0, testHandlers_1.default)(io, socket);
};
exports.default = onConnection;
//# sourceMappingURL=onConnection.js.map