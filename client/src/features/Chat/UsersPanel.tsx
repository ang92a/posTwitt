import React from 'react';
import './style/panel.css';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';

function UsersPanel(): JSX.Element {
  const users = useSelector((store: RootState) => store.profiles.profiles);
  console.log(users);

  return (
    <nav className="chat-navigation">
      <ul className="chat-navigation-list">
        <li className="chat-navigation-item active">
          <a href="#">John Doe</a>
        </li>
      </ul>
    </nav>
  );
}

export default UsersPanel;
