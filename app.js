const express = require("express");
const cors = require("cors");
const userRouter = require("./Routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to api");
});
app.use("/api/v1/users", userRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "No route found",
  });
});

module.exports = app;
