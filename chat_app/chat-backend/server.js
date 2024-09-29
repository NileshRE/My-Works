const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const servermain = http.createServer(app);
const io = new Server(servermain, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

servermain.listen(4000, () => {
  console.log("Listening on port 4000");
});
