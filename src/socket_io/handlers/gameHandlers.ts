import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Cell from "../../enums/cell";
import GameService from "../../services/gameService";
import SocketTool from "../socketTool";

const gameHandlers = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) => {

    const tool = new SocketTool(io, socket);
    const gameService = new GameService();

    socket.on("battle:join", (roomId: string) => {

        if (tool.getCountInRoom(roomId) > 1) {
            socket.emit("battle:join", "Join: no");
            return;
        }

        const room = gameService.newGame(roomId).getRoomId();

        socket["name"] = "";
        socket.join(room);

        socket.emit("battle:join", "Join: yes");
    });


    socket.on("battle:queue", () => {

    });

    socket.on("battle:rooms", () => {

    });

    socket.on("battle:users", () => {

    });


    socket.on("battle:init", (y: number, x: number) => {
        const field = gameService.addShip(y, x)
            .getMyFieldArr();

        socket.emit("battle:init", field);
    })

    socket.on("battle:room", (data) => {
        const room = gameService.getRoomId();

        socket.emit("battle:room", room);
    });


}

export default gameHandlers;