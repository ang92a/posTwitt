import React from 'react';
import style from './headerWelcomePage.module.css';
import fon from './assets/group.jpg';
import svgDolf from './assets/1141426.svg';

function HeaderWelcomePage(): JSX.Element {
  return (
    <div className={style.containerHeader}>
      <div className={style.boxTitle}>
        <div className={style.boxTitle}>
          <img src={svgDolf} alt="dolpf" className={style.svg} />
          <h1>
            Ныряй как дельфин на{' '}
            <a href="/news" className={style.btnDemo}>
              PosTwitt
            </a>{' '}
            и общайся <br /> на языке кода!
          </h1>
          <div className={style.boxFlex}>
            <a href="/sign-up" className={style.btn}>
              Зарегистрироваться
            </a>
            <a href="/sign-in" className={style.btn}>
              Войти
            </a>
          </div>
        </div>
      </div>
      <div className={style.boxImg}>
        <img src={fon} alt="" />
      </div>
    </div>
  );
}

export default HeaderWelcomePage;
