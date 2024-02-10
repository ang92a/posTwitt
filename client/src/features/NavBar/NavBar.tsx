/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import { logout } from '../Sign/authSlice';
import style from './style/navbar.module.css';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <>
      <ul className={style.container}>
        <li className={style.item}>
          <NavLink className={style.link} to="/news">
            Лента
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="/users">
            Профиль
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} to="/setting">
            Настройки
          </NavLink>
        </li>
        {user && (
          <>
            <li
              onClick={() => {
                dispatch(logout()).catch(console.log);
                navigate('/');
              }}
              className={style.item}
            >
              <NavLink className={style.link} to="/logout">
                Logout
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.name}!</li>{' '}
            <li className={style.item}>
              <img className={style.img} src={user?.img} alt="" />
            </li>{' '}
          </>
        )}
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
