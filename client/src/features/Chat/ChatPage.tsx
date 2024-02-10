import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socket from './socket';
import Message from './Message';
import { useAppDispatch, type RootState } from '../../redux/store';
import { checkUser } from '../Sign/authSlice';
import load from './assets/Rolling-1s-200px.svg';

function ChatPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const loading = useSelector((store: RootState) => store.auth.loading);

  const user = useSelector((store: RootState) => store.auth.auth);
  const state = useSelector((store: RootState) => store.profiles.profiles)
  console.log(state);
  
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ message, user }]);

  console.log(user);

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat message', (msg) => {
      setMessage('');
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

  return loading ? (
    <img src={load} alt="load" />
  ) : (
    <div className="chat d-flex">
      {messages.map((mes) => (
        <Message user={mes.user} message={mes.message} />
      ))}
      <form className="d-flex chatForm" data-id={user?.id}>
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
  );
}

export default ChatPage;
