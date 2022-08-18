import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../services/gameService";
import gameHandlers from "./handlers/gameHandlers";
import roomHandlers from "./handlers/roomHandlers";


const onConnection = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    const gameService: GameService = new GameService(socket.id);

    const rand = Math.floor(Math.random() * 100);
    socket.data.name = rand.toString();

    gameHandlers({ io, socket, gameService });
    roomHandlers({ io, socket, gameService });

}

export default onConnection;