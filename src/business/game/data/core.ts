import ICore from "../interfaces/ICore";
import States from "./states";
import Player from "./player";
import Room from "./room";

class Core implements ICore {
    private _rooms: Room[] = [];

    public get rooms(): Room[] {
        return this._rooms;
    }

    public getRoomById(roomId: string): Room {
        return this._rooms.find(room => room.id === roomId);
    }

    public getRoomByPlayer(socketId: string): Room {
        return this._rooms.find(room => room.players.some(player => player.socketId === socketId));
    }

    public getMyPlayer(socketId: string): Player {
        for (const room of this._rooms) {
            const player = room.players.find(_player => _player.socketId === socketId);
            if (player) {
                return player;
            }
        }
        return null;
    }


    public getEnemyPlayer(socketId: string): Player {
        const room = this._rooms.find(_room => _room.players.some(_player => _player.socketId === socketId));
        return room.players.find(player => player.socketId !== socketId);
    }

    public addRoom(roomId: string): boolean {
        const isExists = this._rooms.find(_room => _room.id === roomId);

        if (isExists) {
            return false;
        }

        const room = new Room(roomId, new States());
        this._rooms.push(room);
        return true;
    }

    public removeRoom(roomId: string): void {
        this._rooms = this._rooms.filter(room => room.id !== roomId);
    }

    public removeEmptyRooms(): void {
        this._rooms = this._rooms.filter(room => room.count !== 0);
    }

    public isExistsRoom(roomId: string): boolean {
        return this._rooms.findIndex(room => room.id === roomId) !== -1;
    }

}


export { Core };
export default new Core();