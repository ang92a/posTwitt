import React, { useEffect, useState } from 'react';
import styles from './slider.module.css'; // Импортируем CSS модуль
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

function Slider(): JSX.Element {
  const carouselItems = 3;
  const animationTiming = 9;

  const animationDelayFraction = animationTiming / carouselItems;

  const posts = useSelector((store: RootState) => store.posts.posts);

  const postsCycled = [...posts, ...posts];

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {postsCycled.map((post, idx) => (
          <div
            key={idx}
            className={styles.carousel__item}
            style={{
              animationDelay: `calc(${animationDelayFraction * (idx - 2)}s)`,
            }}
          >
            <PostItem key={post.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
