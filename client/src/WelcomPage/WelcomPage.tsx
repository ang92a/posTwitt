import React from 'react';
import StatistikItem from './StatistikItem';
//import PostItem from './PostItem';
import PostList from './PostList';

export const WelcomPage = (): JSX.Element => {
  return (
    <>
      {' '}
      <StatistikItem />
      <PostList />
    </>
  );
};
