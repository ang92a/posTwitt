import React, { useReducer } from 'react';
import style from './style/statistik.module.css';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

function StatistikItem(): JSX.Element {
  const users = useSelector((store: RootState) => store.profiles.profiles).length;
  const allPosts = useSelector((store: RootState) => store.posts.posts).length;
  const todayPostsLol = Math.floor(Math.random() * 100);
  return (
    <div className={style.container}>
      <div className={style.one}>
        <p className={style.count}>{users}</p>
        <p>Пользователей зарегестрировано</p>
      </div>
      <div className={style.two}>
        <p className={style.count}>{allPosts}</p>
        <p>Сообщений написано</p>
      </div>
      <div className={style.fre}>
        <p className={style.count}>{todayPostsLol}</p>
        <p>Написано сегодня</p>
      </div>
    </div>
  );
}

export default StatistikItem;
