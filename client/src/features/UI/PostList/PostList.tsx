/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '../../../redux/store';

import style from './postlist.module.css';
import PostItem from '../PostItem/PostItem';

const PostList = (): JSX.Element => {
  const posts = useSelector((store: RootState) => store.posts.posts);
  console.log(posts);

  const slice = posts.slice(0, 3);
  console.log(slice);
  return (
    <>
      <div className={style.containerList}>
        {slice.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
