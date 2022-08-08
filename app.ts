import express from 'express';
import indexRouter from "./src/routes/index";
import sequelize, { openConnection, sync } from './src/sequelize/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { createServer } from 'http';
import "dotenv/config";
import onConnection from './src/socket_io/onConnection';
import corsConfig from './src/cors/cors.config';
import cors from 'cors';
import socketInit from './src/socket_io/socket';

const app = express();
const server = createServer(app);
const port: number = parseInt(process.env.PORT) || 3000;


const io = socketInit(server);


app.use(cors(corsConfig));
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', indexRouter);


openConnection()
  .then(async () => console.log("open connection!"))
  .catch((err: Error) => console.error(err.message));


  
io.on("connection", (socket) => onConnection(io, socket));

sync(sequelize).then((sequelize: Sequelize) => {

  server.listen(port, () => {
    console.log(`Server is listening port ${port}`);
  });

}).catch((err: Error) => {
  console.error(err.message);
});
