import Room from "./room";

class Core {
    private _rooms: Room[] = [];

    constructor() {

    }

    public get rooms(): Room[] {
        return this._rooms;
    }

    public getRoom(roomId: string): Room {
        return this._rooms.find(room => room.roomId == roomId);
    }

    public addRoom(room: Room): this {
        this._rooms.push(room);
        return this;
    }

    public removeRoom(roomId: string): this {
        this._rooms = this._rooms.filter(room => room.roomId != roomId);
        return this;
    }
}


export { Core };
export default new Core();