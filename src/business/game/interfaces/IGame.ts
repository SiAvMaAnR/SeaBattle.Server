import Coordinate from "../../../types/coordinate";
import Room from "../data/room";
import EnemyField from "../fields/enemyField";
import MyField from "../fields/myField";
import PairPlayers from "../types/PairPlayers";

interface IGame {
    joinRoom(roomId: string, socketId: string): boolean;
    leaveRoom(socketId: string): boolean;
    removeEmptyRooms(): void;
    getPlayers(socketId: string): PairPlayers;
    createRoom(roomId: string): boolean;
    isExistsRoom(roomId: string): boolean;
    getRooms(): Room[];
    getRoomById(roomId: string): Room;
    getRoomByPlayer(socketId: string): Room;
    isFullRoom(socketId: string): boolean;
    getMyField(socketId: string): MyField;
    getEnemyField(socketId: string): EnemyField;
    getIsMove(socketId: string): boolean;
    checkWin(socketId: string): boolean;
    setIsReady(socketId: string, isReady: boolean): void;
    setIsInit(socketId: string, isInit: boolean): void;
    shoot(socketId: string, coordinate: Coordinate): boolean;
    setIsAccess(socketId: string, isAccess: boolean);
    iWon(socketId: string, isWon: boolean): void
}

export default IGame;