import { app } from "./app";
import { createServer } from 'http';
import { HOST, PORT } from "./env";
import { Server } from "socket.io"

const server = createServer(app);
const io = new Server(server)

io.on("connection", (socket)=>{
  console.log('A user connected', socket.id);

  socket.on('joinRoom',(room,num1) => {
    console.log('on JoinRoom event & extra data = ',num1);

    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
    socket.join(room);
  })

  socket.on('disconnect', ()=>{
    console.log('A user disconnected', socket.id)
  })
})
 
server.listen(PORT, () => {
  console.log(`[server]: Listening at http://${HOST}:${PORT}`);
});

