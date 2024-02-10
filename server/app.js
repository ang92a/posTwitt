const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { Server } = require("socket.io");
const { createServer } = require('node:http');

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});


const indexRouter = require('./routes/index.routes');
const { verifyAccessToken } = require('./middleware/verifyJWT');

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(verifyAccessToken);

app.use('/', indexRouter);


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg.message);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
