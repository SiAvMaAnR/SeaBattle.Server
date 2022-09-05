import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import indexRouter from './routes/index';
import sequelize, { openConnection, sync } from './database/sequelize';
import { createServer } from 'http';
import onConnection from './socket_io/onConnection';
import corsConfig from './config/cors';
import cors from 'cors';
import ioInit from './socket_io/socket';
import config from 'config';
import errorHandler from './middlewares/errorHandler';

const run = async () => {
  const app = express();
  const server = createServer(app);
  const port = config.get('server.port') || config.get('server.defaultPort');

  const io = ioInit(server);

  app.use(cors(corsConfig));
  app.use(express.static(`${__dirname}/assets`));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/api', indexRouter);

  app.use(errorHandler);

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
};

run();
