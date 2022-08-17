import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Cell } from "../../business/game/field";
import GameService from "../../services/gameService";
import Coordinate from "../../types/coordinate";
import Room from "../room";
import SocketTool from "../socketTool";


const gameHandlers = ({ io, socket, room }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    
    room: Room
}) => {
    const gameService: GameService = new GameService();
    const tool = new SocketTool(io, socket);

    function initField(field: number[][]): void {
        const myField = gameService.initMyField(field).getMyFieldArr();
        socket.emit("game:field:init", myField);
    }


    function start(): void {

        const roomId = room.get();
        if (!roomId) return;

        const isFullRoom = tool.getSizeRoom(roomId) == 2;

        socket.emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: true
        });

        socket.broadcast.to(roomId).emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: false
        });
    }

    function create(isFirstMove: boolean): void {
        if (room.get()) {
            gameService.createGame();
            gameService.setIsMyMove(isFirstMove);
        }
    }

    function remove(): void {
        if (room.get()) {
            gameService.deleteGame();
        }
    }

    function shootInit(coordinate: Coordinate): void {
        const roomId = room.get();
        if (!roomId) return;

        const isMyMove = gameService.getIsMyMove();
        if (!isMyMove) return;

        const enemyField = gameService.getEnemyFieldArr();
        if (enemyField[coordinate.y][coordinate.x] != 0) return;

        socket.to(roomId).emit("game:shoot:init", coordinate);
    }

    function shootProcess(coordinate: Coordinate): void {
        const roomId = room.get();
        if (!roomId) return;

        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == Cell.Exists);

        io.to(roomId).emit("game:shoot:process", isHit, coordinate);
    }

    function shootResult(isHit: boolean, coordinate: Coordinate): void {
        const isMyMove = gameService.getIsMyMove();
        const cell = (isHit) ? Cell.Killed : Cell.Missed;

        const service = (isMyMove)
            ? gameService.editEnemyField(cell, coordinate).setIsMyMove(isHit)
            : gameService.editMyField(cell, coordinate).setIsMyMove(!isHit);

        socket.emit("game:shoot:result", {
            myField: service.getMyFieldArr(),
            enemyField: service.getEnemyFieldArr()
        });

        if (isMyMove) return;

        const isEnemyWon = gameService.checkDefeat();

        if (isEnemyWon) {
            const roomId = room.get();

            socket.broadcast.to(roomId).emit("game:result", true);
            socket.emit("game:result", false);
        }
    }

    function getMyField(): void {
        const field = gameService.getMyFieldArr();
        socket.emit("game:field:my", field);
    }

    function getEnemyField(): void {
        const field = gameService.getEnemyFieldArr();
        socket.emit("game:field:enemy", field);
    }

    function getIsMyMove(): void {
        const isMyMove = gameService.getIsMyMove();
        socket.emit("game:move", isMyMove);
    }

    

    socket.on("game:field:init", initField);
    socket.on("game:field:my", getMyField);
    socket.on("game:field:enemy", getEnemyField);
    socket.on("game:shoot:init", shootInit);
    socket.on("game:shoot:process", shootProcess);
    socket.on("game:shoot:result", shootResult);
    socket.on("game:move", getIsMyMove);
    socket.on("game:start", start);
    socket.on("game:create", create);
    socket.on("game:remove", remove);
}

export default gameHandlers;