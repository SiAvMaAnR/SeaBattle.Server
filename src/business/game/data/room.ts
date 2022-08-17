import GameData from "./gameData";
import Player from "./player";

class Room {
    private _roomId: string;
    private _players: Player[] = [];
    private _gameData: GameData = new GameData();


    constructor(roomId: string) {
        this._roomId = roomId;
    }

    public get count() {
        return this._players.length;
    }

    public get roomId() {
        return this._roomId;
    }

    public get players() {
        return this.players;
    }

    public addPlayer(player: Player): boolean {
        if (this.count >= 2) {
            return false;
        }

        this._players.push();
        return true;
    }

    public removePlayer(sokcetId: string) {
        this._players = this._players.filter(player => player.socketId != sokcetId);
    }

}

export default Room;