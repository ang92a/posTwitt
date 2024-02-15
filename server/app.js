const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { Server } = require('socket.io');
const { createServer } = require('node:http');

const server = createServer(app);
const io = new Server(server, {
  cookie: true,
  withCredentials: true,
  cors: {
    origin: 'http://localhost:5173',
  },
});

const indexRouter = require('./routes/index.routes');
const { verifyAccessToken } = require('./middleware/verifyJWT');

const handleSocketConnection = require('./socketHandlers');

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.static(
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, './dist')
      : path.join(__dirname, '../client/dist')
  )
);
app.use(verifyAccessToken);

app.use('/', indexRouter);

app.send('*', (req, res) => {
  const filePath = path.join(__dirname, './dist/index.html'); // Путь к файлу, который вы хотите отправить
  // Отправка содержимого файла как ответ на запрос
  res.send(filePath);
});
handleSocketConnection(io);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
