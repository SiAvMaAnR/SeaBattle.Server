import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/index';
import sequelize, { openConnection, sync } from './database/sequelize';
import { createServer } from 'http';
import onConnection from './socket_io/onConnection';
import corsConfig from './config/cors';
import cors from 'cors';
import ioInit from './socket_io/socket';
import config from 'config';

const run = async () => {
  const app = express();
  const server = createServer(app);
  const port: number = config.get('server.port') || 3000;

  const io = ioInit(server);

  app.use(cors(corsConfig));
  app.use(express.static(`${__dirname}/assets`));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/api', indexRouter);

  // error handler

  openConnection()
    .then(async () => console.log('open connection!'))
    .catch((err: Error) => console.error(err.message));

  io.on('connection', (socket) => onConnection(io, socket));

  sync(sequelize)
    .then(() => {
      server.listen(port, () => {
        console.log(`Server is listening port ${port}`);
      });
    })
    .catch((err: Error) => {
      console.error(err.message);
    });
}

run();
