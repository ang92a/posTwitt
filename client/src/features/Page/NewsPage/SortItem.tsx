/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { loadPosts, loadSortPosts } from '../WelcomPage/postsSlice';
import { useAppDispatch } from '../../../redux/store';
import style from './style/sortitem.module.css';

export const SortItem = (): JSX.Element => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (text) {
      dispatch(loadSortPosts(text)).catch(console.log);
    } else {
      dispatch(loadPosts()).catch(console.log);
    }
  }, [text]);
  return (
    <form action="">
      <div className={style.sortItem}>
        <input
          className={style.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Поиск"
        />
      </div>
    </form>
  );
};
