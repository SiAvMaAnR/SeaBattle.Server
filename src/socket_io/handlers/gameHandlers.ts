import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Cell from "../../enums/cell";
import GameService from "../../services/gameService";
import Coordinate from "../../types/coordinate";
import SocketTool from "../socketTool";


const gameHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: GameService
}) => {

    const tool = new SocketTool(io, socket);

    function initGame(coordinates: Coordinate[]): void {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();

        socket.emit("game:field:init", field);
    }

    function shootGame(coordinate: Coordinate): void {
        const roomId = gameService.getRoomId();

        socket.to(roomId).emit("game:shoot:init", coordinate);
    }

    function shootProcessGame(coordinate: Coordinate): void {
        const isMyMove = gameService.getIsMyMove();

        if (!isMyMove) return;

        const roomId = gameService.getRoomId();
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == Cell.Exists);

        io.to(roomId).emit("game:shoot:process", isHit, coordinate);
    }

    function shootResultGame(isHit: boolean, coordinate: Coordinate): void {
        const isMyMove = gameService.getIsMyMove();
        const cell = (isHit) ? Cell.Killed : Cell.Missed;

        const service = (isMyMove)
            ? gameService.editEnemyField(cell, coordinate).setIsMyMove(isHit)
            : gameService.editMyField(cell, coordinate).setIsMyMove(!isHit);


        socket.emit("game:shoot:result", {
            myField: service.getMyFieldArr(),
            enemyField: service.getEnemyFieldArr()
        });
    }

    function getMyFieldGame(): void {
        const field = gameService.getMyFieldArr();
        socket.emit("game:field:my", field);
    }

    function getEnemyFieldGame(): void {
        const field = gameService.getEnemyFieldArr();
        socket.emit("game:field:enemy", field);
    }

    function getIsMyMove(): void {
        const isMyMove = gameService.getIsMyMove();
        socket.emit("game:move", isMyMove);
    }

    socket.on("game:field:init", initGame);
    socket.on("game:field:my", getMyFieldGame);
    socket.on("game:field:enemy", getEnemyFieldGame);
    socket.on("game:shoot:init", shootGame);
    socket.on("game:shoot:process", shootProcessGame);
    socket.on("game:shoot:result", shootResultGame);
    socket.on("game:move", getIsMyMove);
}

export default gameHandlers;