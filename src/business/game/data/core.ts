import Player from "./player";
import Room from "./room";

class Core {
    private _rooms: Room[] = [];

    constructor() {

    }

    public get rooms(): Room[] {
        return this._rooms;
    }

    public getRoomById(roomId: string): Room {
        return this._rooms.find(room => room.id == roomId);
    }

    public getRoomByPlayer(socketId: string): Room {
        return this._rooms.find(room => room.players.some(player => player.socketId == socketId));
    }

    public addRoom(roomId: string): boolean {
        const isExists = this._rooms.find(room => room.id == roomId);

        if (isExists) {
            return false;
        }

        const room = new Room(roomId);
        this._rooms.push(room);
        return true;
    }

    public removeRoom(roomId: string): void {
        this._rooms = this._rooms.filter(room => room.id != roomId);
    }

    public removeEmptyRooms(): void {
        this._rooms = this._rooms.filter(room => room.count != 0);
    }

    public isExistsRoom(roomId: string): boolean {
        return this._rooms.findIndex(room => room.id == roomId) !== -1;
    }
}


export { Core };
export default new Core();