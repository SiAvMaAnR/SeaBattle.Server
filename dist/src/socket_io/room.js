"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Room {
    constructor() {
        this.roomId = null;
    }
    // constructor(roomId: string) {
    //     this.roomId = roomId;
    // }
    get() {
        return this.roomId;
    }
    set(roomId) {
        this.roomId = roomId;
    }
}
exports.default = Room;
//# sourceMappingURL=room.js.map