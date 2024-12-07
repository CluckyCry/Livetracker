// imports
import express from "express";
import cors from "cors";
import { config } from "dotenv";
//import { Server } from "socket.io";
import { createServer } from "node:http";
import busesRouter from "./routes/Buses.route.js"

config();

const app = express();
const server = createServer(app);
/*
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})
*/

app.use(cors());
app.use("/api", busesRouter())
//app.use(express.json());

/*
io.on("connection", (socket)=>{
    console.log(`a user connection ${socket.id}`)

    // Start tracking the location:
    socket.on("update-location", (data) => {
      const {latitude,longitude} = data;
      console.log(latitude,longitude);
    })

    socket.on("disconnect", ()=>{
      console.log(socket.id, "left")  
    })
})
*/

server.listen(process.env.PORT, ()=>console.log("Listening."))
