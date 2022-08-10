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


    const initBattle = (coordinates: Coordinate[]) => {
        const field = gameService.addShips(coordinates)
            .getMyFieldArr();

        socket.emit("battle:init", field);
    }

    const shootBattle = (coordinate: Coordinate) => {
        const roomId = gameService.getRoomId();
        socket.to(roomId).emit("battle:shoot", coordinate);
    }

    const shootResultBattle = (coordinate: Coordinate) => {
        const roomId = gameService.getRoomId();
        const cell = gameService.getMyCell(coordinate);
        const isHit = (cell == Cell.Exists);
        io.to(roomId).emit("battle:shoot:result", isHit);
    }


    const getMyFieldBattle = () => {
        const field = gameService.getMyFieldArr();
        socket.emit("battle:field:my", field);
    }

    const getEnemyFieldBattle = () => {
        const field = gameService.getEnemyFieldArr();
        socket.emit("battle:field:enemy", field);
    }

    socket.on("battle:init", initBattle);
    socket.on("battle:field:my", getMyFieldBattle);
    socket.on("battle:field:enemy", getEnemyFieldBattle);
    socket.on("battle:shoot", shootBattle);
    socket.on("battle:shoot:result", shootResultBattle);
}

export default gameHandlers;