import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../../services/gameService";
import SocketTool from "../socketTool";

const gameHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: GameService
}) => {

    const tool = new SocketTool(io, socket);


    const initBattle = (y: number, x: number) => {
        const field = gameService.addShip(y, x).getMyFieldArr();
        socket.emit("battle:init", field);
    }


    socket.on("battle:init", initBattle);
}

export default gameHandlers;