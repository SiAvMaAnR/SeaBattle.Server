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

    function initGame(coordinates: Coordinate[]) {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();

        socket.emit("game:field:init", field);
    }

    function shootGame(coordinate: Coordinate) {
        const roomId = gameService.getRoomId();

        socket.to(roomId).emit("game:shoot", coordinate);
    }

    function shootResultGame(coordinate: Coordinate) {
        const roomId = gameService.getRoomId();
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == Cell.Exists);

        const newCell = isHit ? Cell.Killed : Cell.Missed;

        gameService.editEnemyField(newCell, coordinate);

        io.to(roomId).emit("game:shoot:result", isHit);
    }


    function getMyFieldGame() {
        const field = gameService.getMyFieldArr();
        socket.emit("game:field:my", field);
    }

    function getEnemyFieldGame() {
        const field = gameService.getEnemyFieldArr();
        socket.emit("game:field:enemy", field);
    }

    socket.on("game:field:init", initGame);
    socket.on("game:field:my", getMyFieldGame);
    socket.on("game:field:enemy", getEnemyFieldGame);
    socket.on("game:shoot", shootGame);
    socket.on("game:shoot:result", shootResultGame);
}

export default gameHandlers;