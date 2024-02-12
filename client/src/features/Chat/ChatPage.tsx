/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import './style/chat.css';
import { useSelector } from 'react-redux';
import socket from './socket';
import send from './assets/send-svgrepo-com.svg';
import SenderMes from './SenderMes';
import ReceiverMes from './ReceiverMes';
import { type RootState } from '../../redux/store';
import './style/panel.css';

function ChatTest(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);
  const users = useSelector((store: RootState) => store.profiles.profiles).filter(
    (man) => man.name !== user?.name,
  );
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [receiver, setReceiver] = useState(user);
  const [messages, setMessages] = useState([{ message, user, receiverId: 0 }]);

  console.log(1);

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      socket.emit('reg', user?.id);
      setIsConnected(true);
    });

    socket.on('chat message', (msg) => {
      console.log(123132132132);
      setMessages((prev) => (prev.length === 1 && prev[0].message === '' ? [msg] : [...prev, msg]));
    });

    socket.on('disconnect', () => setIsConnected(false));

    return () => {
      socket.disconnect();
      socket.off('connect', () => setIsConnected(true));
      socket.off('disconnect', () => setIsConnected(false));
    };
  }, [user]);

  return (
    <>
      <nav className="chat-navigation">
        <ul className="chat-navigation-list">
          {users.map(
            (man) =>
              man.id !== user?.id && (
                <li
                  key={man.id}
                  onClick={() => {
                    setActiveId(man.id);
                    setReceiver(man);
                  }}
                  className={`chat-navigation-item ${man.id === activeId ? 'active' : ''}`}
                >
                  <a href="#">{man.name}</a>
                </li>
              ),
          )}
        </ul>
      </nav>
      <section role="log" className="slds-chat">
        <ul className="slds-chat-list">
          {messages.map((mes) =>
            mes.message !== '' && mes.user?.id === user?.id ? (
              <SenderMes user={mes.user} message={mes.message} />
            ) : (
              <ReceiverMes receiver={receiver} message={mes.message} />
            ),
          )}
        </ul>
      </section>
      <div className="input-container">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (receiver === undefined) return;
            setMessage('');
            const receiverId = receiver?.id;
            // const userId = user?.id;
            socket.emit('chat message', message, user, receiverId);
          }}
          type="submit"
        >
          <img src={send} alt="send" />
        </button>
      </div>
    </>
  );
}

export default ChatTest;
