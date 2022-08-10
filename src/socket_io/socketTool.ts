import { Namespace, Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

class SocketTool {

    private io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
    private socket: Socket


    constructor(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) {
        this.io = io;
        this.socket = socket;
    }


    public getCountInRoom(roomId: string): number {
        return this.io.sockets.adapter.rooms.get(roomId)?.size || 0;
    }

    public getRooms() {

        const allRooms = Array.from(this.io.sockets.adapter.rooms);
        const activeRooms = allRooms.filter(room => !room[1].has(room[0]));


        const result = activeRooms.map(i => {
            return {
                room: i[0],
                count: i[1]?.size
            }
        });

        return result;
    }

    public getSocketsInRoom(roomId: string): Namespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> {
        return this.io.sockets.adapter.rooms[roomId].sockets;
    }


}


export default SocketTool;