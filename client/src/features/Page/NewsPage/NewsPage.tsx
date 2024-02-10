import React from 'react';

import PostList from '../../UI/PostList/PostList';
import AddForm from '../../UI/AddForm/AddForm';
import LeftColumn from '../../UI/LeftColumn/LeftColumn';

import style from './style/news.module.css';

function NewsPage(): JSX.Element {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.containerFlexRow}>
          <div className={style.leftbox}>
            <AddForm />
            <div className={style.centerFlex}>
              <PostList />
            </div>
          </div>
          <LeftColumn />
        </div>
      </div>
    </main>
  );
}
export default NewsPage;
