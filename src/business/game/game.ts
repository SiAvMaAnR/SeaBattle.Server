import { Core } from "./data/core";
import Player from "./data/player";
import Room from "./data/room";


class Game {
    private core: Core;

    constructor(core: Core) {
        this.core = core;
    }

    public joinRoom(roomId: string, socketId: string): boolean {
        return this.core.getRoomById(roomId)?.addPlayer(socketId);
    }

    public leaveRoom(socketId: string): boolean {
        const isSuccess = this.core.getRoomByPlayer(socketId)?.removePlayer(socketId);
        this.core.removeEmptyRooms();
        return isSuccess;
    }

    public createRoom(roomId: string): boolean {
        return this.core.addRoom(roomId);
    }

    public isExistsRoom(roomId: string): boolean {
        return this.core.isExistsRoom(roomId);
    }

    public getRooms(): Room[] {
        return this.core.rooms;
    }

    public getRoomById(roomId: string): Room {
        return this.core.getRoomById(roomId);
    }

    public getRoomByPlayer(socketId: string): Room {
        return this.core.getRoomByPlayer(socketId);
    }

}

export default Game;