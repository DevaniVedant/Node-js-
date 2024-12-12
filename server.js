const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // Serve static files

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        console.log("Message received:", msg);
        io.emit("chat message", msg); // Broadcast message to all clients
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
