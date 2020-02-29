require("dotenv").config();
const express = require("express");
require("express-async-errors");
const cors = require("cors");

const routers = require("./routes");
const { connectToDB } = require("./utils/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const HOST = "0.0.0.0";
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use("/api", routers);
app.use(errorHandler);

connectToDB()
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, HOST, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log("DB connection failed");
    console.error(e.message);
    process.exit(1);
  });
