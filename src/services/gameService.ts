import BaseService from "./baseService";
import Coordinate from "../types/coordinate";
import IGameService from "./interfaces/IGameService";
import { Cell } from "../business/game/fields/field";
import Game from "../business/game/game";
import core from "../business/game/data/core";
import Room from "../business/game/data/room";

class GameService extends BaseService implements IGameService {

    private socketId: string;
    private game: Game = new Game(core);

    constructor(socketId: string) {
        super();
        this.socketId = socketId;
    }

    public joinRoom(roomId: string): boolean {
        if (!this.game.isExistsRoom(roomId)) {
            this.game.createRoom(roomId);
        }

        return this.game.joinRoom(roomId, this.socketId);
    }

    public leaveRoom(): void {
        this.game.leaveRoom(this.socketId);
    }

    public getRooms(): RoomResponse[] {
        return this.game.getRooms().map((room, index) => {
            return {
                index: index,
                id: room.id,
                count: room.count
            }
        });
    }

    public getRoomById(roomId: string): RoomResponse {
        const room = this.game.getRoomById(roomId);

        if (!room) {
            return null;
        }

        return {
            id: room.id,
            count: room.count
        }
    }

    public getRoomByPlayer(socketId: string): RoomResponse {
        const room = this.game.getRoomByPlayer(socketId);

        if (!room) {
            return null;
        }

        return {
            id: room.id,
            count: room.count
        }
    }

    public 
}

type RoomResponse = {
    index?: number,
    id: string,
    count: number
}

export { RoomResponse };
export default GameService;