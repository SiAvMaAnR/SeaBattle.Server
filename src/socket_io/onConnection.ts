import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import seaBattleHandlers from "./handlers/gameHandlers";


const onConnection = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    seaBattleHandlers(io, socket);
}

export default onConnection;