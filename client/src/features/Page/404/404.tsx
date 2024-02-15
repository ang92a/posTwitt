import React from 'react';
import style from './style/404Page.module.css';
import img from './assets/Толя.png';

export const Page404 = () => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.div_for_h1}>
          <h1 className={style.h1_in_404}>Анатолий осуждает Ваш выбор!</h1>
        </div>
        <div className={style.picture_in_404}>
          <img src={img} />
        </div>
      </div>
    </main>
  );
};
