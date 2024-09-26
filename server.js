import { createServer } from "http";
import { parse } from "url";
import next from "next";
import {Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// Start Next.js app
app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  // Create WebSocket server
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000","http://localhost:3001","https://portfolio-hn16.vercel.app"], // Replace with your frontend URL
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("New client connected");
    // Handle incoming messages
    socket.on("message", ({id,message}) => {
      // Send a response back to the client
      console.log('id:',id);
      if(id){io.to(id).emit("message", message);return;};
      socket.broadcast.emit("message", message);
    });
    // Handle client disconnect
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  // Listen on port 3000
  server.listen(3001, (err) => {
    // if (err) throw err;
    console.log("> Server is running on http://localhost:3001");
  });
});
