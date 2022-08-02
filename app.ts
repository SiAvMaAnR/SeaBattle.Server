var express = require('express');
const app = express();

let indexRouter = require("./routes/index");

const port: number = 3000;
const host: string = "127.0.0.1";


app.use('/api', indexRouter);

app.listen(port,host, err => {
  if (err) {
    return console.error(err);
  }
  console.log("success");
  return console.log(`server is listening on ${port}`);
});

