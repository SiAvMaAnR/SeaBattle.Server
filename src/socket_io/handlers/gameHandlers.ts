import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Cell } from "../../business/game/fields/field";
import GameService from "../../services/gameService";
import Coordinate from "../../types/coordinate";
import SocketTool from "../socketTool";
import EvGame from "../types/evGame";

const gameHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: GameService
}) => {
    const tool = new SocketTool(io, socket);

    function start(): void {

        const roomId = gameService.getRoomByPlayer().id;
        if (!roomId) return;

        const isFullRoom = gameService.isFullRoom();

        console.log(isFullRoom);
        

        socket.emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: true
        });

        socket.broadcast.to(roomId).emit("game:start", {
            isStart: isFullRoom,
            isFirstMove: false
        });
    }


    socket.on("game:start", start);
}

export default gameHandlers;