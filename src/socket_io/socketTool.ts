import { Namespace, RemoteSocket, Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

class SocketTool {

    private io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
    private socket: Socket


    constructor(io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, socket: Socket) {
        this.io = io;
        this.socket = socket;
    }


    public getSizeRoom(roomId: string): number {
        return this.io.sockets.adapter.rooms.get(roomId)?.size || 0;
    }

    public getRooms() {

        const allRooms = Array.from(this.io.sockets.adapter.rooms);
        const activeRooms = allRooms.filter(room => !room[1].has(room[0]));


        const result = activeRooms.map((room, index) => {
            return {
                id: index,
                name: room[0],
                count: room[1]?.size
            }
        });

        return result;
    }

    public async getSockets(roomId: string): Promise<RemoteSocket<DefaultEventsMap, any>[]> {
        return await this.io.to(roomId).fetchSockets();
    }


    public async getUsers(roomId: string): Promise<string[]> {
        const sockets = await this.io.to(roomId).fetchSockets();
        return sockets.map(socket => socket.data["name"]).filter(socket => socket);
    }

}


export default SocketTool;