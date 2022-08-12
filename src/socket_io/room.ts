
class Room {
    private roomId: string = null;

    public get(): string {
        return this.roomId;
    }

    public set(roomId: string): void {
        this.roomId = roomId;
    }

}

export default Room;