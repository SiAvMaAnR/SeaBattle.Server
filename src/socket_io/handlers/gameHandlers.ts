import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
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

    const shotBattle = (coordinate: Coordinate) => {
        const roomId = gameService.getRoomId();
        socket.to(roomId).emit("battle:shoot", coordinate);
    }


    socket.on("battle:init", initBattle);
    socket.on("battle:shoot", shotBattle);
}

export default gameHandlers;