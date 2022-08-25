import Room from "../data/room";
import { IStatisticRes } from "../data/statistic";
import EnemyField from "../fields/enemyField";
import { Coordinate } from "../fields/field";
import MyField from "../fields/myField";
import { IShipCoord } from "../game";
import PairPlayers from "../types/PairPlayers";

interface IGame {
    joinRoom(roomId: string, login: string, socketId: string): boolean;
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
    saveResult(socketId: string, isWon: boolean): void;
    getStatistic(socketId: string): IStatisticRes;
    getShips(socketId: string, field: number[][]): any;
}

export default IGame;