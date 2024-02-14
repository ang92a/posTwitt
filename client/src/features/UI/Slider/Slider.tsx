import React, { useEffect, useState } from 'react';
import styles from './slider.module.css'; // Импортируем CSS модуль
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';
import { Post } from '../../Page/WelcomPage/types';


function Slider({ posts }: { posts: Post[] }): JSX.Element {
  
  const animationTiming = 3;
  const animationDuration = animationTiming * posts.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel} style={{ '--animation-duration': `${animationDuration}s` }}>
        {posts.map((post, idx) => (
          <div
            key={idx}
            className={styles.carousel__item}
            style={{
              animationDelay: `calc(${(animationDuration / posts.length) * (idx - 2)}s)`,
            }}
          >
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
