import React from 'react';
import StatistikItem from './StatistikItem';
import PostList from './PostList';
import style from './style/welcomepage.module.css';
import HeaderWelcomePage from '../HeaderWelcomePage/HeaderWelcomePage';
import LeftColumn from '../LeftColumn/LeftColumn';

function WelcomPage(): JSX.Element {
  return (
    <main className={style.main}>
      <HeaderWelcomePage />
      <StatistikItem />
      <div className={style.container}>
        <h1>Последние сообщения</h1>
      </div>
      <div className={style.containerFlexRow}>
        <PostList />
        <LeftColumn />
      </div>
      <div className={style.footer}>
        <h1>
          Зарегистрируйтесь и <br />
          узнайте обо всем первым
        </h1>
        <div>
          <a href="/sign-up" className={style.btn}>
            Зарегистрироваться
          </a>
          <a href="/sign-in" className={style.btn}>
            Войти
          </a>
        </div>
      </div>
    </main>
  );
}
export default WelcomPage;
