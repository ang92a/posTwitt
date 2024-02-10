import React from 'react';
import style from './style/postitem.module.css';

import type { Post } from './types';
import like from './img/Like.png';
import comment from './img/comment.png';
import repost from './img/repost.png';
import izbr from './img/избранное.png';

function PostItem({ post }: { post: Post }): JSX.Element {
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
      <div className={style.containerPostMore}>X</div>
    </div>
  );
}

export default PostItem;

// return (
//   <div className={style.containerOne}>
//     <div className={style.containerImg}>
//       <img className={style.Img} src={post.User.img} alt="img" />
//     </div>
//     <div className={style.containerContent}>
//       <div className={style.content}>
//         <div className={style.text}>
//           <div className={style.name}>
//             <div className={style.flexBoxRow}>
//               <p>{post.User.name}</p>
//               <div className={style.freeTochka}> ...</div>
//             </div>
//             <p>{post.User.email}</p>
//           </div>
//           <p>{post.content}</p>
//         </div>

//         <div className={style.function}>
//           <div className={style.one}>
//             <img className={style.img} src={comment} alt="" />
//             <p>{post.Comments.length}</p>
//           </div>
//           <div className={style.two}>
//             <img className={style.img} src={repost} alt="" />
//             <p>12</p>
//           </div>
//           <div className={style.fre}>
//             <img className={style.img} src={like} alt="" />
//             <p>{post.PostLikes.length}</p>
//           </div>
//           <div className={style.foo}>
//             <img className={style.img} src={izbr} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
