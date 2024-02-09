/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import style from './style/postitem.module.css';
import type { Post } from './types';
import like from './img/Like.png';
import comment from './img/comment.png';
import repost from './img/repost.png';
import izbr from './img/избранное.png';

// eslint-disable-next-line react/function-component-definition, arrow-body-style
const PostItem = ({ post }: { post: Post }): JSX.Element => {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <>
      <div className={style.containerOne}>
        <div className={style.containerTwo}>
          <div className={style.containerImg}>
            <img className={style.Img} src={post.User.img} alt="img" />
          </div>
          <div className={style.containerContent}>
            <div className={style.content}>
              <div className={style.left}>
                <div className={style.text}>
                  <div className={style.name}>
                    <p>{post.User.name}</p>
                    <p>{post.User.email}</p>
                  </div>
                  <p>{post.content}</p>
                </div>

                <div className={style.function}>
                  <div className={style.one}>
                    <img className={style.img} src={comment} alt="" />
                    <p>{post.Comments.length}</p>
                  </div>
                  <div className={style.two}>
                    <img className={style.img} src={repost} alt="" />
                    <p>12</p>
                  </div>
                  <div className={style.fre}>
                    <img className={style.img} src={like} alt="" />
                    <p>{post.PostLikes.length}</p>
                  </div>
                  <div className={style.foo}>
                    <img className={style.img} src={izbr} alt="" />
                  </div>
                </div>
              </div>
              <div className={style.freeTochka}> ...</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
