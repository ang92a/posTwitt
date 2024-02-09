import React from 'react';
// import style from './style/postlist.modules.css';
//import { useSelector } from 'react-redux';
//import { RootState } from '@reduxjs/toolkit/query';
import PostItem from './PostItem';

const PostList = (): JSX.Element => {
  //const posts = useSelector((store:RootState)=>store.posts.posts)

  return (
    // <div>itempost</div>
    <PostItem />
    // {posts.map((post) => (
    //   <PostItem key={post.id} post={post} />
    // ))}
  );
};

export default PostList;
