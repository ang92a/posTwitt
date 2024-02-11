/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */

import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useAppDispatch, type RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import style from './postitem.module.css';
import like from './img/Like.png';
import comment from './img/comment.png';
import repost from './img/repost.png';
import izbr from './img/избранное.png';

import type { RootState } from '../../../redux/store';
import type { Post } from '../../Page/WelcomPage/types';
import { useAppDispatch } from '../../../redux/store';
import { DelPost, loadPosts } from '../../Page/WelcomPage/postsSlice';
import { AddComment } from './commentSlice';

function PostItem({ post }: { post: Post }): JSX.Element {
  const [stateCom, setComState] = useState(false);
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.auth);


  return (
    <div className={style.containerPost}>
      <div className={style.containerPostOne}>
        <div className={style.containerPostPhoto}>
          <img className={style.Img} src={post.User.img} alt="img" />
        </div>
        <div className={style.containerPostContent}>
          <p className={style.name}>
            {post.User.name} {post.User.email}
          </p>
          <p className={style.content}>{post.content}</p>
          <div className={style.function}>
            <div className={style.one} onClick={() => setComState((prev) => !prev)}>
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

      {stateCom && (
        <>
          {post.Comments.map((comment) => (
            <div>
              <div className={style.containerPostTwo}>
                <div className={style.containerPostPhotoCom}>
                  <img className={style.ImgCom} src={comment.User.img} alt="фотоUSer" />
                </div>
                <div className={style.NameComment}>
                  <div>{comment.User.name}</div>
                  <div className={style.Comment}>{comment.content}</div>
                </div>
                <div className={style.delComment}>x</div>
              </div>
            </div>
          ))}
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                AddComment({
                  postId: post.id,
                  userId: +post.User.id,
                  content: text,
                }),
              )
                .then(() => {
                  setText('');
                })
                .catch(console.log);
            }}
          >
            <div className={style.containerPostForm}>
              <div className={style.containerPostPhotoForm}>
                <img className={style.ImgForm} src={user.img} alt="фотоUSer" />
              </div>
              <div className={style.Input}>
                <input
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  value={text}
                  placeholder="Написать комментарий..."
                />
              </div>
              <div className={style.containerBtn}>
                <button
                  type="submit"
                  className={style.btn}
                  onClick={() => dispatch(loadPosts()).catch(console.log)}
                >
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default PostItem;
