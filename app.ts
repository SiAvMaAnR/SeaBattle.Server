import express from 'express';
import indexRouter from "./routes/index";
import cors from "cors";
import sequelize from './sequelize/sequelize';
import "reflect-metadata";
import "dotenv/config";
import User from './models/User';

const app = express();
const port: number = parseInt(process.env.PORT) || 3000;

const corsOptions = {

}

app.use(cors(corsOptions));
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

sequelize.authenticate()
  .then(async () => {


    const user: User = await User.build({
      name: "User1",
      age: 10
    });

    console.debug(user);

    await user.save();

    console.log("DB connect!");

  }).catch(err => console.error(err));


app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});

