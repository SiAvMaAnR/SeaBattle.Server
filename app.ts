import express from 'express';
import indexRouter from "./src/routes/index";
import cors from "cors";
import sequelize from './src/sequelize/sequelize';
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

sequelize.authenticate().then(async () => {
  console.log("DB connect!");

  const repository = await sequelize.getRepository(User)

  const createUser = await repository.create({
    name: "1234",
    age: 100
  });


  // await createUser.save();

  // statistics.create();

}).catch(err => console.error(err));

app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});

