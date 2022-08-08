"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testHandler = (io, socket) => {
    const test = (data) => {
        console.log(data);
        socket.emit("message", "OK");
    };
    socket.on("test", test);
};
exports.default = testHandler;
//# sourceMappingURL=testHandlers.js.map