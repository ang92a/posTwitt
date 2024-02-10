/* eslint-disable react/function-component-definition */
import React from 'react';
import PostItem from './PostItem';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import style from './style/postlist.module.css';

const PostList = (): JSX.Element => {
  const posts = useSelector((store: RootState) => store.posts.posts);


  return (
    <>
      <div className={style.containerList}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
