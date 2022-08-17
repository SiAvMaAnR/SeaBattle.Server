import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Cell } from "../../business/game/fields/field";
import GameService from "../../services/gameService";
import Coordinate from "../../types/coordinate";
import Room from "../room";
import SocketTool from "../socketTool";
import EvGame from "../types/evGame";

const gameHandlers = ({ io, socket, room, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    room: Room
    gameService: GameService
}) => {
    const tool = new SocketTool(io, socket);

    


    socket.on("",);
}

export default gameHandlers;