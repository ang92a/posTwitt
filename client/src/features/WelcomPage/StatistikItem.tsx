import React from 'react';
import style from './style/statistik.module.css';

function StatistikItem(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.one}>
        <p className={style.count}>20</p>
        <p>Пользователей зарегестрировано</p>
      </div>
      <div className={style.two}>
        <p className={style.count}>556</p>
        <p>Сообщений написано</p>
      </div>
      <div className={style.fre}>
        <p className={style.count}>58</p>
        <p>Написано сегодня</p>
      </div>
    </div>
  );
}

export default StatistikItem;
