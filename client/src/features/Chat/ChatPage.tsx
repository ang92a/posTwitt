/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import './style/chat.css';

import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import socket from './socket';
import send from './assets/send-svgrepo-com.svg';
import SenderMes from './SenderMes';
import ReceiverMes from './ReceiverMes';
import { useAppDispatch, type RootState } from '../../redux/store';
import './style/panel.css';
import { addDialog, addMessage, loadChats } from './chatSlice';
import {type User } from '../Page/SignPage/types';
import {type Message } from './types';

function ChatPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const chats = useSelector((store: RootState) => store.chats.dialogs);
  const user = useSelector((store: RootState) => store.auth.auth);
  const users = useSelector((store: RootState) => store.profiles.profiles).filter(
    (prof) => prof.id !== user?.id,
  );
  const { receiverId } = useParams();
  const [activeId, setActiveId] = useState<number | null>(receiverId ? +receiverId : null);
  const [receiver, setReceiver] = useState(user);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(loadChats()).catch(console.log);
  }, []);

  useEffect(() => {
    if (containerRef.current && containerRef.current.scrollHeight) {
      containerRef?.current?.scrollTo(0, containerRef.current?.scrollHeight);
    }
  }, [chats, receiver]);

  useEffect(() => {
    if (user) {
      socket.connect();
      socket.on('connect', () => {
        socket.emit('reg', user?.id);
        setIsConnected(true);
      });

      socket.on('add dialog', (dialog) => {
        dispatch(addDialog(dialog));
      });

      socket.on('chat message', (msg: {user: User, newMessage: Message}) => {
        console.log(msg.newMessage);
        dispatch(addMessage(msg.newMessage));
      });

      socket.on('disconnect', () => setIsConnected(false));

      return () => {
        socket.disconnect();
        socket.off('connect', () => setIsConnected(true));
        socket.off('disconnect', () => setIsConnected(false));
      };
    }
  }, [user]);

  useEffect(() => {
    setReceiver(users.find((el) => receiverId && el.id === +receiverId));
  }, [users, activeId]);

  return (
    <>
      <nav className="chat-navigation">
        <ul className="chat-navigation-list">
          {chats.map((dialog) => {
            let man = dialog.User1 || dialog.User2;
            if (!man) {
              if (dialog.userId1 === user?.id) man = users.find((el) => el.id === dialog.userId2);
              if (dialog.userId2 === user?.id) man = users.find((el) => el.id === dialog.userId1);
            }
            return (
              <div
                key={dialog.id}
                onClick={() => {
                  if (man) {
                    setActiveId(man.id);
                    setReceiver(man);
                  }
                }}
                className={`chat-navigation-item ${man?.id === activeId ? 'active' : ''}`}
              >
                {man && <NavLink to={`/chat/${man?.id}`}>{man?.name}</NavLink>}
              </div>
            );
          })}
        </ul>
      </nav>
      <div className="topPanel">
        {receiver?.img && <img className="receiverAva" src={receiver?.img} alt="" />}
        {receiver?.name}
      </div>
      <section ref={containerRef} role="log" className="slds-chat">
        <ul className="slds-chat-list">
          {receiver &&
            chats.map(
              (dialog) =>
                (dialog.userId1 === activeId || dialog.userId2 === activeId) &&
                dialog.Messages?.map((mes) =>
                  mes.content !== '' && mes.senderId === user?.id ? (
                    <SenderMes user={user} message={mes} />
                  ) : (
                    <ReceiverMes receiver={receiver} message={mes} />
                  ),
                ),
            )}
        </ul>
      </section>
      {receiver && (
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
              socket.emit('chat message', message, user, activeId);
              setMessage('');
            }}
            type="submit"
          >
            <img src={send} alt="send" />
          </button>
        </div>
      )}
    </>
  );
}

export default ChatPage;
