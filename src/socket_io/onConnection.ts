import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import testHandlers from "./handlers/testHandlers";


const onConnection = (io, socket: Socket) => {

    testHandlers(io, socket);
}

export default onConnection;