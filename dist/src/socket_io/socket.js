"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket = (server) => {
    let io = require('socket.io')(server);
    // ...
    return io;
};
//# sourceMappingURL=socket.js.map