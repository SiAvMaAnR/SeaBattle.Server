import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Cell from "../../enums/cell";
import ICoordinate from "../../interfaces/common/ICoordinate";
import GameService from "../../services/gameService";

const gameHandlers = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {
    const gameService = new GameService();

    socket.on("battle:shot", (y: number, x: number) => {
        // const isHit = gameService.shot({ y, x });
        // socket.emit(`${isHit}`);
    });

    socket.on("battle:join", (roomId: string) => {


        const room = gameService.createGame()
            .initGame(roomId)
            .getRoomId();

        socket.join(room);

        const countSocketsInRoom = io.sockets.adapter.rooms.get(room).size;
        io.to(room).emit("battle:join", `${countSocketsInRoom}`);
        io.to(room).emit("battle:join", room);
    });

    socket.on("battle:test", (data) => {
        const room = gameService.getRoomId();
        io.to(room).emit("battle:test", "OK");
    });

    socket.on("battle:turn", (data) => {

    });

    socket.on("battle:end", (data) => {

    });
}

export default gameHandlers;