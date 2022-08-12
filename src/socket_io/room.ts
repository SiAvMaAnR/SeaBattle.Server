
class Room {
    private roomId: string = null;

    // constructor(roomId: string) {
    //     this.roomId = roomId;
    // }

    public get(): string {
        return this.roomId;
    }

    public set(roomId: string): void {
        this.roomId = roomId;
    }

}

export default Room;