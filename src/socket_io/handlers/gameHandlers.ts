import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Cell from "../../enums/cell";
import GameService from "../../services/gameService";
import Coordinate from "../../types/coordinate";
import Room from "../room";
import SocketTool from "../socketTool";


const gameHandlers = ({ io, socket, gameService, room }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: GameService,
    room: Room
}) => {

    const tool = new SocketTool(io, socket);

    function init(coordinates: Coordinate[]): void {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();

        socket.emit("game:field:init", field);
    }

    function start(): void {

        const roomId = room.get();
        console.log(roomId);

        if (roomId && tool.getSizeRoom(roomId) == 2) {
            io.to(roomId).emit("game:start", true);
            return;
        }
        socket.emit("game:start", false);
    }

    function create(): void {
        gameService.createGame();
        console.log("CREATE");
    }


    function remove(): void {
        gameService.deleteGame();
    }


    function shoot(coordinate: Coordinate): void {
        const roomId = room.get();

        socket.to(roomId).emit("game:shoot:init", coordinate);
    }

    function shootProcess(coordinate: Coordinate): void {
        const isMyMove = gameService.getIsMyMove();

        if (!isMyMove) return;

        const roomId = room.get();
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

    async function ready(): Promise<void> {

        const roomId = room.get();

        const sockets = await tool.getSockets(roomId);

        sockets.forEach(socket => console.log(socket.data.name));

    }

    socket.on("game:field:init", init);
    socket.on("game:field:my", getMyField);
    socket.on("game:field:enemy", getEnemyField);
    socket.on("game:shoot:init", shoot);
    socket.on("game:shoot:process", shootProcess);
    socket.on("game:shoot:result", shootResult);
    socket.on("game:move", getIsMyMove);
    socket.on("game:start", start);
    socket.on("game:create", create);
    socket.on("game:remove", remove);
    socket.on("game:ready", ready);
}

export default gameHandlers;