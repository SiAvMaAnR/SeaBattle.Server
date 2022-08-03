import express from 'express';
import indexRouter from "./routes/index";
import cors from "cors";
// import sequelize from './sequelize/sequelize';
import "reflect-metadata";
import "dotenv/config";

const app = express();
const port: number = parseInt(process.env.PORT) || 3000;

const corsOptions = {

}

// sequelize.authenticate().then(res => console.log(res));

app.use(cors(corsOptions));
app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});

