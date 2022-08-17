class Player {
    private _socketId: string;
    private _name: string = "default";

    constructor({ socketId, name }: {
        socketId: string,
        name?: string
    }) {
        this._name = name;
        this._socketId = socketId;
    }


    public get name(){
        return this._name;
    }

    public get socketId(){
        return this._socketId;
    }
}

export default Player;