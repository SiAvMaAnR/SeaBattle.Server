import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../../services/gameService";
import Room from "../room";
import SocketTool from "../socketTool";

const roomHandlers = ({ io, socket, room, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    room: Room,
    gameService: GameService
}) => {
    const tool = new SocketTool(io, socket);

    
    socket.on("", );
}

export default roomHandlers;