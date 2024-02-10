import React from 'react';
import PostList from '../../WelcomPage/PostList';
import  AddForm  from './AddForm';

function NewsPage(): JSX.Element {
  return (
    <>
      <AddForm />
      <PostList />
    </>
  );
}
export default NewsPage;
