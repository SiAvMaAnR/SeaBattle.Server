"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seaBattleService_1 = __importDefault(require("../../services/seaBattleService"));
const seaBattleHandlers = (io, socket) => {
    const service = new seaBattleService_1.default();
    socket.on("battle:shot", (y, x) => {
        const isHit = service.shot({ y, x });
        socket.emit("battle:shot", isHit);
    });
    socket.on("battle:turn", (data) => {
    });
    socket.on("battle:end", (data) => {
    });
};
exports.default = seaBattleHandlers;
//# sourceMappingURL=seaBattleHandlers.js.map