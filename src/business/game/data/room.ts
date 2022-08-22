import UserService from "../../../services/userService";
import Player from "./player";
import States from "./states";

class Room {
    private _id: string;
    private _players: Player[] = [];
    private _states: States;

    constructor(id: string, gameData: States) {
        this._id = id;
        this._states = gameData;
    }

    public get states(): States {
        return this._states;
    }

    public get count(): number {
        return this._players.length;
    }

    public get id(): string {
        return this._id;
    }

    public get players(): Player[] {
        return this._players;
    }

    public addPlayer(socketId: string): boolean {
        if (this.count >= 2 || this._states.isAccess) {
            return false;
        }

        this._players.push(new Player(socketId));
        return true;
    }

    public getMyPlayer(socketId: string): Player {
        return this._players.find(player => player.socketId == socketId);
    }

    public getEnemyPlayer(socketId: string): Player {
        return this._players.find(player => player.socketId != socketId);
    }

    public removePlayer(sokcetId: string): boolean {
        this._players = this._players.filter(player => player.socketId != sokcetId);
        return true;
    }

    public isFullRoom(): boolean {
        return this.count >= 2;
    }

    public restart(): void {
        
        this._states = new States();
        this._players.forEach(player => player.restart());
    }
}

export default Room;