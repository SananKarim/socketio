const express = require("express");
const socket = require("socket.io");

var app = express();

var server = app.listen(4000, () => {
  console.log("started on 6000");
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connnection");
});


