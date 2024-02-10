/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
// import { useSelector } from 'react-redux';
// import { useAppDispatch, type RootState } from '../../redux/store';

import style from './postitem.module.css';
import like from './img/Like.png';
import comment from './img/comment.png';
import repost from './img/repost.png';
import izbr from './img/избранное.png';
import type { Post } from '../../Page/WelcomPage/types';
import { useAppDispatch } from '../../../redux/store';
import { DelPost } from '../../Page/WelcomPage/postsSlice';

function PostItem({ post }: { post: Post }): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={style.containerPost}>
      <div className={style.containerPostPhoto}>
        <img className={style.Img} src={post.User.img} alt="img" />
      </div>
      <div className={style.containerPostContent}>
        <p className={style.name}>
          {post.User.name} {post.User.email}
        </p>
        <p className={style.content}>{post.content}</p>
        <div className={style.function}>
          <div className={style.one}>
            <img className={style.img} src={comment} alt="" />
            <p className={style.counter}>{post.Comments.length}</p>
          </div>

          <div className={style.two}>
            <img className={style.img} src={repost} alt="" />
            <p className={style.counter}>12</p>
          </div>

          <div className={style.fre}>
            <img className={style.img} src={like} alt="" />
            <p className={style.counter}>{post.PostLikes.length}</p>
          </div>

          <div className={style.foo}>
            <img className={style.img} src={izbr} alt="" />
          </div>
        </div>
      </div>
      <div className={style.containerPostMore} onClick={() => dispatch(DelPost(post.id))}>
        X
      </div>
    </div>
  );
}

export default PostItem;
