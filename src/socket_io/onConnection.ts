import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../services/gameService";
import gameHandlers from "./handlers/gameHandlers";
import roomHandlers from "./handlers/roomHandlers";




const onConnection = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    const gameService = new GameService();

    gameHandlers({io, socket, gameService});
    roomHandlers({io, socket, gameService});
}

export default onConnection;