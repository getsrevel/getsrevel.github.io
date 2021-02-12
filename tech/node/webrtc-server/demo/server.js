const express = require("express");
const app = express();

let broadcaster;
const port = 4000;

const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server);
app.use(express.static(__dirname + "/public"));

io.on("error", e => console.log(e));

io.on("connection", socket => {
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    console.log(`Broadcaster id: ${broadcaster}`)
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    console.log(`Watcher id: ${socket.id}`)
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("offer", (id, message) => {
    console.log(`Offer id: ${socket.id}, message: ${message}`)
    socket.to(id).emit("offer", socket.id, message);
  });
  socket.on("answer", (id, message) => {
    console.log(`Answer id: ${socket.id}, message: ${message}`)
    socket.to(id).emit("answer", socket.id, message);
  });
  socket.on("candidate", (id, message) => {
    console.log(`Candidate id: ${socket.id}, message: ${message}`)
    socket.to(id).emit("candidate", socket.id, message);
  });
  socket.on("disconnect", () => {
    console.log(`Disconnect id: ${socket.id}`)
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
