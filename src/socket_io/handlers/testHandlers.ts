import { Server } from "http";
import { Socket } from "socket.io";

const testHandler = (io: Server, socket: Socket): void => {

    const test = (data: string) => {
        console.log(data);

        socket.emit("message","OK");
    }

    socket.on("test", test);
}


export default testHandler;