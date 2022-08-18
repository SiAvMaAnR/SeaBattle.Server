import BaseService from "./baseService";
import Coordinate from "../types/coordinate";
import IGameService from "./interfaces/IGameService";
import { Cell } from "../business/game/fields/field";
import Game from "../business/game/game";
import core from "../business/game/data/core";
import Room from "../business/game/data/room";
import MyField from "../business/game/fields/myField";
import PlayersResponse from "../business/game/types/PlayersResponse";
import RoomResponse from "../business/game/types/RoomResponse";

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
        this.game.removeEmptyRooms();
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

    public getRoomByPlayer(): RoomResponse {
        const room = this.game.getRoomByPlayer(this.socketId);

        if (!room) {
            return null;
        }

        return {
            id: room.id,
            count: room.count
        }
    }

    public getPlayerNames(): PlayersResponse {
        const players = this.game.getPlayers(this.socketId);
        return {
            my: players?.my?.socketId,
            enemy: players?.enemy?.socketId
        }
    }

    public isFullRoom(): boolean {
        return this.game.isFullRoom(this.socketId);
    }

    public getMyField(): number[][] {
        return this.game.getMyField(this.socketId)?.getArr();
    }

    public getEnemyField(): number[][] {
        return this.game.getEnemyField(this.socketId)?.getArr();
    }

    public initMyField(field: number[][]): number[][] {
        return this.game.getMyField(this.socketId)?.setField(field);
    }

    public getIsMove(): boolean {
        return this.game.getIsMove(this.socketId);
    }

    public moveGen(condition: boolean): boolean {
        const players = this.game.getPlayers(this.socketId);
        const myMove = players?.my?.setMove(condition);
        const enemyMove = players?.enemy?.setMove(!condition);
        return myMove != enemyMove;
    }

    public checkWin(): boolean {
        return this.game.checkWin(this.socketId);
    }

    public shoot(coordinate: Coordinate): boolean {
        return this.game.shoot(this.socketId, coordinate);
    }
}


export default GameService;