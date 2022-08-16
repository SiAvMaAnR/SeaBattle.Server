import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import GameService from "../../services/gameService";
import Room from "../room";
import SocketTool from "../socketTool";

const roomHandlers = ({ io, socket, room }: {
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
    socket: Socket,
    room: Room
}) => {
    const tool = new SocketTool(io, socket);

    function join(roomId: string) {

        const isFull = tool.getSizeRoom(roomId) >= 2;
        const isRoomExists = room.get();

        if (isRoomExists) {
            socket.emit("room:join", false, "You are already in this room!");
            return;
        }

        if (isFull) {
            socket.emit("room:join", false, "Full room!");
            return;
        }

        socket.join(roomId);
        io.to(roomId).emit("room:join", true, `Success, ${socket.data['name']} join!`);
        room.set(roomId);
    }

    function leave(roomId?: string) {
        io.to(roomId).emit("room:leave", true, `Success, ${socket.data['name']} left!`);
        socket.leave(room.get());
        room.set(null);
    }

    function getAll() {
        socket.emit("room:get:all", tool.getRooms());
    }

    function getCurrent() {
        const roomId = room.get();
        socket.emit("room:get:current", roomId);
    }

    async function getUsers(roomId: string) {
        const users = await tool.getUsers(roomId);
        socket.emit("room:users", users);
    }

    socket.on("room:join", join);
    socket.on("room:leave", leave);
    socket.on("room:get:all", getAll);
    socket.on("room:get:current", getCurrent);
    socket.on("room:users", getUsers);
}

export default roomHandlers;