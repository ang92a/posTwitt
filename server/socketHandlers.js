const handleSocketConnection = (io) => {
  io.on('connection', (socket) => {
    console.log(socket);
    console.log('a user connected');

    socket.on('chat message', (msg) => {
      console.log('message: ' + msg.message);
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected')
    });
  });
};

module.exports = handleSocketConnection;