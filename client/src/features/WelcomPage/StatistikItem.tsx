import React from 'react';
import style from './style/statistik.module.css';

// eslint-disable-next-line react/function-component-definition, arrow-body-style
const StatistikItem = (): JSX.Element => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className={style.container}>
        <div className={style.one}>
          <h1>20</h1>
          <h3>Пользователей зарегестрировано</h3>
        </div>
        <div className={style.two}>
          <h1>556</h1>
          <h3>Сообщений написано</h3>
        </div>
        <div className={style.fre}>
          <h1>58</h1>
          <h3>Написано Сообщений</h3>
        </div>
      </div>
    </>
  );
};

export default StatistikItem;
