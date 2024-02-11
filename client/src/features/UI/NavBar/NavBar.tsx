/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../../redux/store';
import { logout } from '../../Page/SignPage/authSlice';

import style from './navbar.module.css';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <ul className={style.navigation}>
            <div className={style.leftBox}>
              <li className={style.item}>
                <NavLink
                  className={`${style.link} ${window.location.pathname === '/news' ? style.active : ''}`}
                  to="/news"
                >
                  Лента
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink
                  className={`${style.link} ${window.location.pathname === `/profiles/${user?.id}` ? style.active : ''}`}
                  to={`/profiles/${user?.id}`}
                >
                  Профиль
                </NavLink>
              </li>
              <li className={style.item}>
                <NavLink
                  className={`${style.link} ${style.nowork} ${window.location.pathname === '/setting' ? style.active : ''}`}
                  to="/setting"
                >
                  Настройки
                </NavLink>
              </li>
            </div>
            {user && (
              <>
                <div className={style.rightBox}>
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
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
