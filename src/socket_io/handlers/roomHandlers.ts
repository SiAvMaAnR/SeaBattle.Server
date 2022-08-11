import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../../services/gameService";
import SocketTool from "../socketTool";

const gameHandlers = ({ io, socket, gameService }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    gameService: GameService
}) => {
    const tool = new SocketTool(io, socket);

    function joinRoom(roomId: string) {

        const isFull = tool.getCountInRoom(roomId) > 1;
        const isRoomExists = gameService?.getRoomId();

        if (isRoomExists) {
            socket.emit("rooms:join", false, "You are already in this room!");
            return;
        }

        if (isFull) {
            socket.emit("rooms:join", false, "Full room!");
            return;
        }

        gameService.createGame(roomId);
        
        socket.join(roomId);
        io.to(roomId).emit("rooms:join", true, `Success, ${socket.data['name']} join!`);
    }

    function leaveRoom(roomId: string) {

        const isMissingRoom = gameService.getRoomId() != roomId;

        if (isMissingRoom) {
            socket.emit("rooms:leave", false, "You are not in this room!");
            return;
        }

        gameService.deleteGame();
        io.to(roomId).emit("rooms:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(roomId);
    }

    function getRooms() {
        socket.emit("rooms:get:all", tool.getRooms());
    }

    function getRoom() {
        const room = gameService.getRoomId();

        socket.emit("rooms:get:current", room);
    }

    async function getUsers(roomId: string) {
        const users = await tool.getUsers();
        socket.emit("rooms:users", users);
    }

    socket.on("rooms:join", joinRoom);
    socket.on("rooms:leave", leaveRoom);
    socket.on("rooms:get:all", getRooms);
    socket.on("rooms:get:current", getRoom);
    socket.on("rooms:users", getUsers);
}

export default gameHandlers;