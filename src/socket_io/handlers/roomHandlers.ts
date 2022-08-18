import { disconnect } from "process";
import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../../services/gameService";
import SocketTool from "../socketTool";

const roomHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: GameService
}) => {
    const tool = new SocketTool(io, socket);

    function join(roomId: string): void {
        const room = gameService.getRoomByPlayer();

        if (room) {
            socket.emit("room:join", false, "You are already in this room!");
            return;
        }

        if (!gameService.joinRoom(roomId)) {
            socket.emit("room:join", false, "Full room!");
            return;
        }

        socket.join(roomId);
        io.to(roomId).emit("room:join", true, `Success, ${socket.data['name']} join!`);
    }


    function leave(): void {
        const room = gameService.getRoomByPlayer();

        if (!room) {
            socket.emit("room:leave", false, "Room not found!");
            return;
        }

        gameService.leaveRoom();
        io.to(room.id).emit("room:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(room.id);
    }


    function getAll(): void {
        const rooms = gameService.getRooms();
        socket.emit("room:get:all", rooms);
    }

    function getCurrent(): void {
        const room = gameService.getRoomByPlayer();
        socket.emit("room:get:current", room);
    }

    function getPlayers(): void {
        const players = gameService.getPlayerNames();
        socket.emit("room:users", players);
    }


    socket.on("room:join", join);
    socket.on("room:leave", leave);
    socket.on("room:get:all", getAll);
    socket.on("room:get:current", getCurrent);
    socket.on("room:users", getPlayers);
    socket.on("disconnecting", leave)
}

export default roomHandlers;