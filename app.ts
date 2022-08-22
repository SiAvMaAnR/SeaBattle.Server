import express from 'express';
import indexRouter from "./src/routes/index";
import sequelize, { openConnection, sync } from './src/database/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { createServer } from 'http';
import onConnection from './src/socket_io/onConnection';
import corsConfig from './src/config/cors';
import cors from 'cors';
import ioInit from './src/socket_io/socket';
import "dotenv/config";

const app = express();
const server = createServer(app);
const port: number = parseInt(process.env.PORT, 10) || 3000;

const io = ioInit(server);

app.use(cors(corsConfig));
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', indexRouter);


openConnection()
  .then(async () => console.log("open connection!"))
  .catch((err: Error) => console.error(err.message));

io.on("connection", (socket) => onConnection(io, socket));

sync(sequelize).then(() => {

  server.listen(port, () => {
    console.log(`Server is listening port ${port}`);
  });

}).catch((err: Error) => {
  console.error(err.message);
});
