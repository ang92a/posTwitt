import React from 'react';
import './style/panel.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function UsersPanel(): JSX.Element {
  const users = useSelector((store: RootState) => store.profiles.profiles);
  console.log(users);
  
  return (
    <nav className="chat-navigation">
      <ul className="chat-navigation-list">
        <li className="chat-navigation-item active">
          <a href="#">John Doe</a>
        </li>
        <li className="chat-navigation-item">
          <a href="#">Jane Smith</a>
        </li>
        <li className="chat-navigation-item">
          <a href="#">David Johnson</a>
        </li>
      </ul>
    </nav>
  );
}

export default UsersPanel;
