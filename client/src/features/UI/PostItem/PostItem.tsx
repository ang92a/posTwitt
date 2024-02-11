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
import commentImg from './img/comment.png';
import izbr from './img/избранное.png';
import { AddComment } from './commentSlice';
import emptyLike from './img/empty.svg';
import like from './img/full.svg';
import style from './postitem.module.css';

function PostItem({ post }: { post: Post }): JSX.Element {
  const dispatch = useAppDispatch();

  // состояния на коменты
  const [stateCom, setComState] = useState(false);
  const [text, setText] = useState('');

  const user = useSelector((store: RootState) => store.auth.auth);

  // проверка лайкал ли юзер этот пост
  const findUserInLikePost = user && post.PostLikes.find((el) => el.userId === user.id);

  const [isLike, setLike] = useState(findUserInLikePost);

  // лайки
  const handleLikeClick = (status: string): void => {
    if (status === 'full') {
      dispatch(DisLikePost({ postId: post.id })).catch(console.log);
    } else {
      dispatch(LikePost({ postId: post.id, userId: user!.id })).catch(console.log);
    }
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

  useEffect(() => {
    dispatch(loadPosts()).catch(console.log);
  }, [text]);

  return (
    <>
      <div className={style.containerPost}>
        <div className={style.containerPostOne}>
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
              <div className={style.one} onClick={() => setComState((prev) => !prev)}>
                <img className={style.img} src={commentImg} alt="" />
                <p className={style.counter}>{post.Comments.length}</p>
              </div>

              {/* <div className={style.two}>
                <img className={style.img} src={repost} alt="" />
                <p className={style.counter}>12</p>
              </div> */}

              {user ? (
                <div className={style.fre}>
                  {findUserInLikePost ? (
                    <img
                      src={like}
                      alt="full"
                      className={style.img}
                      data-id={post.id}
                      onClick={() => {
                        handleLikeClick('full');
                        dispatch(loadPosts()).catch(console.log);
                      }}
                    />
                  ) : (
                    <img
                      src={emptyLike}
                      alt="empty"
                      className={style.img}
                      data-id={post.id}
                      onClick={() => {
                        handleLikeClick('empty');
                        dispatch(loadPosts()).catch(console.log);
                      }}
                    />
                  )}
                  <div className="count">{post.PostLikes.length}</div>
                </div>
              ) : (
                <div className={style.fre}>
                  <img src={like} alt="full" className={style.img} data-id={post.id} />
                  <div className="count">{post.PostLikes.length}</div>
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

        {stateCom && (
          <>
            {post.Comments.map((comment) => (
              <div key={comment.id}>
                <div className={style.containerPostTwo}>
                  <div className={style.containerPostPhotoCom}>
                    <img className={style.ImgCom} src={comment.User.img} alt="фотоUSer" />
                  </div>
                  <div className={style.NameComment}>
                    <div>{comment.User.name}</div>
                    <div className={style.Comment}>{comment.content}</div>
                  </div>
                  {user?.id === comment.userId && <div className={style.delComment}>x</div>}
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
                <div>
                  <input
                    className={style.Input}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    value={text}
                    placeholder="Написать комментарий..."
                  />
                </div>
                <div className={style.containerBtn}>
                  <button type="submit" className={style.btn}>
                    Отправить
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default PostItem;
