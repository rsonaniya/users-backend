const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const DB = process.env.DB;

mongoose.connect(DB).then(() => console.log("Connection to DB is successfull"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
  console.log("server started at port", PORT);
});
