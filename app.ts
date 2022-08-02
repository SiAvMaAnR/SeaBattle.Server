import express from 'express';
import indexRouter from "./routes/index";
import "dotenv/config";

console.log(process.env.PORT);
console.log(process.env.HOST);

const app: any = express();
const port: number = parseInt(process.env.PORT);
const host: string = process.env.HOST;

app.use(express.static(`${__dirname}/assets`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', indexRouter);

app.listen(port, host, () => {
  console.log(`Success! Server is listening on ${port}`);
});

