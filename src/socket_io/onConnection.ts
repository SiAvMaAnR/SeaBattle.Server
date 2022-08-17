import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../services/gameService";
import gameHandlers from "./handlers/gameHandlers";
import roomHandlers from "./handlers/roomHandlers";
import Room from "./room";


const onConnection = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    const gameService: GameService = new GameService();
    const room: Room = new Room();

    const rand = Math.floor(Math.random() * 100);
    socket.data.name = rand.toString();

    gameHandlers({ io, socket, room, gameService});
    roomHandlers({ io, socket, room, gameService });
}

export default onConnection;