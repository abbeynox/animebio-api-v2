const express = require("express");
const dotenv = require('dotenv');

dotenv.config({path: '.env'});

const PORT = process.env.PORT || "3001";

const app = express();

/* API Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Routes */
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "You shouldn't be here :p. Read the docs under https://api-docs.ywk.ch"
    );
});
const userRouter = require('./routes/user');
app.use('/user', userRouter);

/* server start / listening */
app.listen(PORT, () => {
  console.log(
    `Server started on Port ${PORT}. View on http://localhost:${PORT}`
  );
});
