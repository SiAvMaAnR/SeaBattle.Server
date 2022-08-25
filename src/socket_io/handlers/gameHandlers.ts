import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Coordinate } from "../../business/game/fields/field";
import IGameService from "../../services/interfaces/IGameService";
import StatisticService from "../../services/statisticService";

const gameHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: IGameService
}) => {
    const statisticService = new StatisticService();

    function start(): void {

        const roomId = gameService.getRoomByPlayer()?.id;
        if (!roomId) return;

        const isStart = gameService.isFullRoom();
        if (!isStart) return;

        const isGen = gameService.moveGen(true);
        if (!isGen) return;

        gameService.setIsStart(isStart);
        io.to(roomId).emit("game:start", isStart);
    }

    function initField(field: number[][]): void {
        const myField = gameService.initMyField(field);

        gameService.setIsInit(true);
        socket.emit("game:field:init", myField);
    }

    function ready(isReady: boolean): void {
        gameService.setIsReady(isReady);
        socket.emit("game:ready", isReady);
    }

    function getMyField(): void {
        const field = gameService.getMyField();
        socket.emit("game:field:my", field);
    }

    function getEnemyField(): void {
        const field = gameService.getEnemyField();
        socket.emit("game:field:enemy", field);
    }

    function getIsMove(): void {
        const isMove = gameService.getIsMove();
        socket.emit("game:move", isMove);
    }

    function shoot(coordinate: Coordinate): void {
        const roomId = gameService.getRoomByPlayer()?.id;
        const isMyMove = gameService.getIsMove();

        if (!roomId || !isMyMove) return;

        const isHit = gameService.shoot(coordinate);
        io.to(roomId).emit("game:shoot", isHit);
    }

    function checkWin(): void {
        const win = gameService.checkWin();
        const roomId = gameService.getRoomByPlayer()?.id;

        if (!roomId || !win) return;

        gameService.saveResult(win);

        socket.emit("game:check", win);
        socket.broadcast.to(roomId).emit("game:check", !win);
    }


    function saveStatistic(): void {
        const userId = gameService.user?.id;

        if (userId) {
            const statistic = gameService.getStatistic();

            if (!statistic) {
                return;
            }

            statistic.enemy = gameService.getEnemy()?.login || "none";
            statisticService.addGame(userId, statistic);
        }
    }

    function getShips(field: number[][]): void {
        const ships = gameService.getShips(field);
        socket.emit("game:ships", ships);
    }

    socket.on("game:start", start);
    socket.on("game:field:init", initField);
    socket.on("game:field:my", getMyField);
    socket.on("game:field:enemy", getEnemyField);
    socket.on("game:move", getIsMove);
    socket.on("game:shoot", shoot);
    socket.on("game:check", checkWin);
    socket.on("game:ready", ready);
    socket.on("game:statistic", saveStatistic);
    socket.on("game:ships", getShips);
}

export default gameHandlers;