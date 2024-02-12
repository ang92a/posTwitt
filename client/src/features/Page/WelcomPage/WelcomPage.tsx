import React from 'react';

import style from './style/welcomepage.module.css';

import PostList from '../../UI/PostList/PostList';
import LeftColumn from '../../UI/LeftColumn/LeftColumn';
import HeaderWelcomePage from '../../UI/HeaderWelcomePage/HeaderWelcomePage';
import StatistikItem from '../../UI/StatisticItem/StatistikItem';
import Slider from '../../UI/Slider/Slider';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
// import Slider from '../../UI/Slider/Slider';

function WelcomPage(): JSX.Element {
  const posts = useSelector((store: RootState) => store.posts.posts);
  const slice = posts.slice(0, 3);

  return (
    <main className={style.main}>
      <HeaderWelcomePage />
      <StatistikItem />
      <div className={style.container}>
        <h1>Последние посты</h1>
      </div>
      <div className={style.containerFlexRow}>
        {/* <Slider /> */}
        <PostList posts={slice} />
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
      {/* <Slider/> */}
    </main>
  );
}
export default WelcomPage;
