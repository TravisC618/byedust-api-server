require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");
const htttp = require("http");
require("express-async-errors");
const cors = require("cors");

const routers = require("./routes");
const { connectToDB } = require("./utils/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const server = htttp.createServer(app);
const io = socketio(server);

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

io.on("connection", socket => {
  console.log(`we have a new connection`);

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("User has left.");
  });
});

app.use("/api", routers);
app.use(errorHandler);

connectToDB()
  .then(() => {
    console.log("DB connected");
    server.listen(PORT, HOST, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log("DB connection failed");
    console.error(e.message);
    process.exit(1);
  });
