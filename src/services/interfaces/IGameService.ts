import { Cell } from "../../business/game/fields/field";
import PlayersResponse from "../../business/game/types/PlayersResponse";
import RoomResponse from "../../business/game/types/RoomResponse";
import Coordinate from "../../types/coordinate";

interface IGameService {
    joinRoom(roomId: string): boolean;
    leaveRoom(): void;
    getRooms(): RoomResponse[];
    getRoomById(roomId: string): RoomResponse;
    getRoomByPlayer(): RoomResponse;
    getPlayers(): PlayersResponse;
    isFullRoom(): boolean;
    getMyField(): number[][];
    getEnemyField(): number[][];
    initMyField(field: number[][]): number[][];
    getIsMove(): boolean;
    moveGen(condition: boolean): boolean;
    checkWin(): boolean;
    shoot(coordinate: Coordinate): boolean;
    setIsStart(isStart: boolean): void;
    isEnd(): boolean;
    setIsEnd(isEnd: boolean): void;
    setIsReady(ready: boolean): void;
    setIsInit(init: boolean): void;
    setIsAccess(access: boolean): void;
}

export default IGameService;