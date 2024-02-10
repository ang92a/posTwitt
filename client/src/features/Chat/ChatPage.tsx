import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socket from './socket';
import Message from './Message';
import { useAppDispatch, type RootState } from '../../redux/store';
import { checkUser } from '../Sign/authSlice';

function ChatPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useSelector((store: RootState) => store.auth.auth);
  console.log(user);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ message, user }]);

  // useEffect(() => {
  //   dispatch(checkUser()).catch(console.log);
  // }, []);

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat message', (msg) => {
      console.log(message, '00000000000000000', messages);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
      socket.on('disconnect', () => setIsConnected(false));
    };

    // return () => {
    //   socket.disconnect();
    //   socket.off('connect', () => setIsConnected(true));
    //   socket.off('disconnect', () => setIsConnected(false));
    // };
  }, []);

  return (
    <div className="App">
      <div className="chat d-flex">
        {messages.map((mes) => (
          <Message user={mes.user} message={mes.message} />
        ))}
        <form className="d-flex chatForm" data-id={user.id}>
          <input
            value={message}
            id="input"
            name="message"
            className="form-control me-2 myInputs"
            type="text"
            placeholder="Написать сообщение"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              socket.emit('chat message', { message, user });
            }}
            id="send-message"
            className="btn btn-dark"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
