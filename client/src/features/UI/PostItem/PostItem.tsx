/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { Post } from '../../Page/WelcomPage/types';
import { type RootState, useAppDispatch } from '../../../redux/store';
import { DelPost, DisLikePost, LikePost, loadPosts } from '../../Page/WelcomPage/postsSlice';

import comment from './img/comment.png';
// import repost from './img/repost.png';
import izbr from './img/избранное.png';
import emptyLike from './img/empty.svg';
import like from './img/full.svg';

import style from './postitem.module.css';

function PostItem({ post }: { post: Post }): JSX.Element {
  const dispatch = useAppDispatch();
  // для лайков
  const [isLike, setIsLike] = useState(false); //пустое

  const user = useSelector((store: RootState) => store.auth.auth);

  const findUserInLikePost = post.PostLikes.find((el) => el.userId === user!.id);

  const handleLikeClick = (): void => {
    console.log(isLike, 'useState(false)');
    if (isLike) {
      dispatch(DisLikePost({ postId: post.id })).catch(console.log);
    } else {
      dispatch(LikePost({ postId: post.id, userId: user!.id })).catch(console.log);
    }
    setIsLike(!isLike);
  };

  const formatDateTime = (createdate: string | number | Date): string => {
    const date = new Date(createdate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  return (
    <div className={style.containerPost}>
      <div className={style.containerPostPhoto}>
        <img className={style.Img} src={post.User.img} alt="img" />
      </div>
      <div className={style.containerPostContent}>
        <p className={style.name}>
          {post.User.name} {post.User.email}
        </p>
        <p className={style.time}>{formatDateTime(post.createdAt)}</p>
        <p className={style.content}>{post.content}</p>
        <div className={style.function}>
          <div className={style.one}>
            <img className={style.img} src={comment} alt="" />
            <p className={style.counter}>{post.Comments.length}</p>
          </div>

          {/* <div className={`${style.two} ${style.nowork}`}>
            <img className={style.img} src={repost} alt="" />
            <p className={style.counter}>0</p>
          </div> */}

          {user && findUserInLikePost ? (
            <div className={style.fre}>
              <img
                src={like}
                alt="full"
                className={style.img}
                data-id={post.id}
                onClick={() => {
                  handleLikeClick();
                  dispatch(loadPosts()).catch(console.log);
                }}
              />
              <div className="count">{post.PostLikes.length}</div>
            </div>
          ) : (
            <div className={style.fre}>
              <img
                src={emptyLike}
                alt="empty"
                className={style.img}
                data-id={post.id}
                onClick={() => {
                  handleLikeClick();
                  dispatch(loadPosts()).catch(console.log);
                }}
              />
              <div className="count">{post.PostLikes.length}</div>
            </div>
          )}

          {!user && (
            <div className={style.fre}>
              <img className={style.img} src={like} alt="" />
              <p className={style.counter}>{post.PostLikes.length}</p>
            </div>
          )}

          <div className={style.foo}>
            <img className={style.img} src={izbr} alt="" />
          </div>
        </div>
      </div>
      {user?.id === post.User.id && (
        <div className={style.containerPostMore} onClick={() => dispatch(DelPost(post.id))}>
          X
        </div>
      )}
    </div>
  );
}

export default PostItem;
