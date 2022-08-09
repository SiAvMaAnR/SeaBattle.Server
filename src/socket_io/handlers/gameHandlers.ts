import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Cell from "../../enums/cell";
import ICoordinate from "../../interfaces/common/ICoordinate";
import GameService from "../../services/gameService";

const gameHandlers = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    const gameService = new GameService();

    socket.on("battle:create", (roomId: string) => {

        const countSocketsInRoom = io.sockets.adapter.rooms.get(roomId).size;

        if(countSocketsInRoom > 1){
            socket.emit("battle:create", "");
        }

        const room = gameService.newGame(roomId).getRoomId();

        socket.join(room);

        
        io.to(room).emit("battle:join", `${countSocketsInRoom}`);
        io.to(room).emit("battle:join", room);
    });

    socket.on("battle:test", (data) => {
        const room = gameService.getRoomId();
        io.to(room).emit("battle:test", "OK");
    });


}

export default gameHandlers;