import Room from "./data/room";
import { IStatisticRes } from "./data/statistic";
import EnemyField from "./fields/enemyField";
import { Cell, Coordinate } from "./fields/field";
import MyField from "./fields/myField";
import ICore from "./interfaces/ICore";
import IGame from "./interfaces/IGame";
import PairPlayers from "./types/PairPlayers";


class Game implements IGame {
    private core: ICore;

    constructor(core: ICore) {
        this.core = core;
    }

    public joinRoom(roomId: string, login: string, socketId: string): boolean {
        return this.core.getRoomById(roomId)?.addPlayer(socketId, login);
    }

    public leaveRoom(socketId: string): boolean {
        return this.core.getRoomByPlayer(socketId)?.removePlayer(socketId);
    }

    public removeEmptyRooms(): void {
        this.core.removeEmptyRooms();
    }

    public getPlayers(socketId: string): PairPlayers {
        const room = this.core.getRoomByPlayer(socketId);

        if (!room) return null;

        return {
            my: room.getMyPlayer(socketId),
            enemy: room.getEnemyPlayer(socketId)
        }
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

    public isFullRoom(socketId: string): boolean {
        return this.core.getRoomByPlayer(socketId)?.isFullRoom();
    }

    public getMyField(socketId: string): MyField {
        return this.core.getMyPlayer(socketId)?.myField;
    }

    public getEnemyField(socketId: string): EnemyField {
        return this.core.getMyPlayer(socketId)?.enemyField;
    }

    public getIsMove(socketId: string): boolean {
        return this.core.getMyPlayer(socketId)?.isMove;
    }

    public checkWin(socketId: string): boolean {
        return this.core.getEnemyPlayer(socketId)?.myField.isDeadField();
    }

    public setIsReady(socketId: string, isReady: boolean): void {
        this.core.getMyPlayer(socketId)?.setIsReady(isReady);
    }

    public setIsInit(socketId: string, isInit: boolean): void {
        this.core.getMyPlayer(socketId)?.setIsInit(isInit);
    }

    public setIsAccess(socketId: string, isAccess: boolean): void {
        this.core.getRoomByPlayer(socketId)?.states?.setIsAccess(isAccess);
    }

    public shoot(socketId: string, coordinate: Coordinate): boolean {
        const myPlayer = this.core.getMyPlayer(socketId);
        const enemyPlayer = this.core.getEnemyPlayer(socketId);

        if (!coordinate || !myPlayer || !enemyPlayer) {
            return null;
        }

        const isCorrect = myPlayer.enemyField.getCell(coordinate.y, coordinate.x) == Cell.Empty;

        if (!isCorrect) {
            return null;
        }

        const isHit = enemyPlayer.myField.getCell(coordinate.y, coordinate.x) == Cell.Exists;
        const cell = isHit ? Cell.Killed : Cell.Missed;

        myPlayer.enemyField.edit(cell, coordinate.y, coordinate.x);
        enemyPlayer.myField.edit(cell, coordinate.y, coordinate.x);

        myPlayer.setIsMove(isHit);
        enemyPlayer.setIsMove(!isHit);

        myPlayer.statistic.addMyMoves();

        (isHit)
            ? myPlayer.statistic.addHits()
            : myPlayer.statistic.addMisses();

        return isHit;
    }

    public saveResult(socketId: string, isWon: boolean): void {
        const room = this.getRoomByPlayer(socketId);
        const myPlayer = this.core.getMyPlayer(socketId);
        const enemyPlayer = this.core.getEnemyPlayer(socketId);

        if (!room || !myPlayer || !enemyPlayer) {
            return;
        }

        myPlayer.setIsWin(isWon);
        enemyPlayer.setIsWin(!isWon);
        room.states.setIsEnd(true);

        myPlayer.statistic.setIsWin(isWon);
        enemyPlayer.statistic.setIsWin(!isWon);
    }

    public getStatistic(socketId: string): IStatisticRes {
        return this.core.getMyPlayer(socketId)?.statistic.get();
    }


}


export default Game;