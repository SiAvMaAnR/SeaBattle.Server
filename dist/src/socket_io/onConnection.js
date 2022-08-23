"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("../business/game/data/core"));
const game_1 = __importDefault(require("../business/game/game"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const gameService_1 = __importDefault(require("../services/gameService"));
const gameHandlers_1 = __importDefault(require("./handlers/gameHandlers"));
const roomHandlers_1 = __importDefault(require("./handlers/roomHandlers"));
const onConnection = (io, socket) => {
    const gameService = new gameService_1.default(socket.id, new game_1.default(core_1.default));
    socket.on("jwt", (jwt) => {
        const tokenData = jwt_1.default.tokenData(jwt);
        gameService.setUser({
            id: tokenData === null || tokenData === void 0 ? void 0 : tokenData.id,
            login: tokenData === null || tokenData === void 0 ? void 0 : tokenData.login
        });
    });
    (0, gameHandlers_1.default)({ io, socket, gameService });
    (0, roomHandlers_1.default)({ io, socket, gameService });
};
exports.default = onConnection;
//# sourceMappingURL=onConnection.js.map