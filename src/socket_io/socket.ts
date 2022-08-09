import { Server } from 'socket.io';
import corsConfig from '../cors/cors.config';

const ioInit = (server) => {
    const io = new Server(server, {
        cors: corsConfig
    });

    return io;
}

export default ioInit;