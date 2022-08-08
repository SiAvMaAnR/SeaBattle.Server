import { Server } from 'socket.io';
import corsConfig from '../cors/cors.config';

const socketInit = (server) => {
    const socket = new Server(server, {
        cors: corsConfig
    });

    return socket;
}

export default socketInit;