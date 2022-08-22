import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import IGameService from "../../services/interfaces/IGameService";

const roomHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: IGameService
}) => {
    function join(roomId: string): void {
        const room = gameService.getRoomByPlayer();

        if (room) {
            socket.emit("room:join", false, "You are already in this room!");
            return;
        }

        if (!gameService.joinRoom(roomId)) {
            socket.emit("room:join", false, "The room is full or the game has already started!");
            return;
        }

        socket.join(roomId);
        socket.emit("room:join", true, `Success, ${socket.data['name']} join!`);
    }


    function leave(): void {
        const roomId = gameService.getRoomByPlayer()?.id;

        if (!roomId) {
            socket.emit("room:leave", false, "Room not found!");
            return;
        }

        gameService.saveResult(false);

        socket.emit("game:check", false);
        socket.broadcast.to(roomId).emit("game:check", true);

        gameService.leaveRoom();
        socket.emit("room:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(roomId);
    }

    function getAll(): void {
        const rooms = gameService.getRooms();
        socket.emit("room:get:all", rooms);
    }

    function getCurrent(): void {
        const room = gameService.getRoomByPlayer();
        socket.emit("room:get:current", room);
    }

    function isReadyPLayers(): void {
        const roomId = gameService.getRoomByPlayer()?.id;

        if (!roomId) return;

        const players = gameService.getPlayers();

        const initAll: boolean = players?.my?.init && players?.enemy?.init;
        const readyAll: boolean = players?.my?.ready && players?.enemy?.ready;
        const isAccess: boolean = initAll && readyAll;


        gameService.setIsAccess(isAccess);
        io.to(roomId).emit("room:players:ready", isAccess);
    }

    socket.on("room:join", join);
    socket.on("room:leave", leave);
    socket.on("room:get:all", getAll);
    socket.on("room:get:current", getCurrent);
    socket.on("room:players:ready", isReadyPLayers);
    socket.on("disconnecting", leave)
}

export default roomHandlers;