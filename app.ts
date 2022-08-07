import express from 'express';
import indexRouter from "./src/routes/index";
import cors from "cors";
import sequelize, { openConnection, closeConnection } from './src/sequelize/sequelize';
import "dotenv/config";
import path from 'path';
import { Statistic, User } from './src/models';

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
}).catch(err => console.error(err));

app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});

// closeConnection().then(async () => {
//   console.log("close connection!");
// }).catch(err => console.error(err));

