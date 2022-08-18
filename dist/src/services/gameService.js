"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("./baseService"));
const game_1 = __importDefault(require("../business/game/game"));
const core_1 = __importDefault(require("../business/game/data/core"));
class GameService extends baseService_1.default {
    constructor(socketId) {
        super();
        this.game = new game_1.default(core_1.default);
        this.socketId = socketId;
    }
    joinRoom(roomId) {
        if (!this.game.isExistsRoom(roomId)) {
            this.game.createRoom(roomId);
        }
        return this.game.joinRoom(roomId, this.socketId);
    }
    leaveRoom() {
        this.game.leaveRoom(this.socketId);
    }
    getRooms() {
        return this.game.getRooms().map((room, index) => {
            return {
                index: index,
                id: room.id,
                count: room.count
            };
        });
    }
    getRoomById(roomId) {
        const room = this.game.getRoomById(roomId);
        if (!room) {
            return null;
        }
        return {
            id: room.id,
            count: room.count
        };
    }
    getRoomByPlayer() {
        const room = this.game.getRoomByPlayer(this.socketId);
        if (!room) {
            return null;
        }
        return {
            id: room.id,
            count: room.count
        };
    }
    getPlayerNames() {
        var _a, _b;
        const players = this.game.getPlayers(this.socketId);
        return {
            my: (_a = players === null || players === void 0 ? void 0 : players.my) === null || _a === void 0 ? void 0 : _a.name,
            enemy: (_b = players === null || players === void 0 ? void 0 : players.enemy) === null || _b === void 0 ? void 0 : _b.name
        };
    }
    isFullRoom() {
        return this.game.isFullRoom(this.socketId);
    }
}
exports.default = GameService;
//# sourceMappingURL=gameService.js.map