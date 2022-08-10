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

    const joinRoom = (roomId: string) => {

        const isFull = tool.getCountInRoom(roomId) > 1;
        const isRoomExists = gameService?.getRoomId();

        if (isRoomExists) {
            socket.emit("rooms:join", false, "Room already exists!");
            return;
        }

        if (isFull) {
            socket.emit("rooms:join", false, "Full room!");
            return;
        }

        gameService.createGame(roomId, "user");
        socket.join(roomId);
        socket.emit("rooms:join", true, "Success!");
    }

    const leaveRoom = (roomId: string) => {

        const isMissingRoom = gameService.getRoomId() != roomId;

        if (isMissingRoom) {
            socket.emit("rooms:leave", false, "You are not in this room!");
            return;
        }

        gameService.deleteGame();
        socket.leave(roomId);
        socket.emit("rooms:leave", true, "Success!");
    }

    const getRooms = () => {
        socket.emit("rooms:get:all", tool.getRooms());
    }


    const getRoom = () => {
        const room = gameService.getRoomId();

        socket.emit("rooms:get:current", room);
    }



    socket.on("rooms:join", joinRoom);
    socket.on("rooms:leave", leaveRoom);
    socket.on("rooms:get:all", getRooms);
    socket.on("rooms:get:current", getRoom);
}

export default gameHandlers;