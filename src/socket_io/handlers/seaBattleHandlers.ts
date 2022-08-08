import { Server } from "http";
import { Socket } from "socket.io";


const seaBattleHandlers = (io: Server, socket: Socket) => {


    socket.on("battle:shot", (data) => {

    });

    socket.on("battle:read", (data) => {

    });
}

export default seaBattleHandlers;