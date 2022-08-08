import { Server, Socket } from "socket.io";
import seaBattleHandlers from "./handlers/seaBattleHandlers";


const onConnection = (io, socket: Socket) => {

    seaBattleHandlers(io, socket);
}

export default onConnection;