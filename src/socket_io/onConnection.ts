import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import core from "../business/game/data/core";
import Game from "../business/game/game";
import GameService from "../services/gameService";
import IGameService from "../services/interfaces/IGameService";
import gameHandlers from "./handlers/gameHandlers";
import roomHandlers from "./handlers/roomHandlers";


const onConnection = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    const gameService: IGameService = new GameService(socket.id, new Game(core));

    socket.on("jwt", (jwt: string) => {

        console.log(jwt);
        
        socket.data.login = "login";
        socket.data.userId = "id";
    });

    gameHandlers({ io, socket, gameService });
    roomHandlers({ io, socket, gameService });
}

export default onConnection;