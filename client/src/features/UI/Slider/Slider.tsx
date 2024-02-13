import React, { useEffect, useState } from 'react';
import styles from './slider.module.css'; // Импортируем CSS модуль
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

function Slider(): JSX.Element {

  const animationTiming = 3;


  // const posts = useSelector((store: RootState) => store.posts.posts);

  const postsCycled = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const animationDuration = animationTiming * postsCycled.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel} style={{ '--animation-duration': `${animationDuration}s` }}>
        {postsCycled.map((post, idx) => (
          <div
            key={idx}
            className={styles.carousel__item}
            style={{
              animationDelay: `calc(${(animationDuration / postsCycled.length) * (idx - 2)}s)`,
            }}
          >
            1111111111111111111111111111111111111111111
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
