const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();

app.get("/", (req, res) => {
  res.send("server working ");
});

const server = http.createServer(app);
const socket = socketIO(server);
socket.on("connection", () => {
  console.log("socket connected");
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log("server start on http://localhost:" + port)
);
