import express from 'express';
import indexRouter from "./src/routes/index";
import cors from "cors";
import sequelize, { openConnection, closeConnection, sync } from './src/sequelize/sequelize';
import "dotenv/config";
import path from 'path';
import { Statistic, User } from './src/models';
import { Sequelize } from 'sequelize-typescript';

const app = express();
const port: number = parseInt(process.env.PORT) || 3000;

const corsOptions = {

}

app.use(cors(corsOptions));
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

openConnection().then(async () => {
  console.log("open connection!");
}).catch((err: Error) => {
  console.error(err.message);
});

app.use('/api', indexRouter);


sync(sequelize).then((sequelize: Sequelize) => {
  app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
  });
}).catch((err: Error) => {
  console.error(err.message);
});




