import type { Comment } from '../../UI/PostItem/types';
import type { User } from '../SignPage/types';

export type Post = {
  createdAt: string; // (createdAt: void): import('react').ReactNode; //any
  id: number;
  userId: number;
  title: string;
  content: string;
  likes: number;
  User: User;
  Comments: Comment[];
  PostLikes: PostLike[];
};

export type PostAdd = {
  content: string;
  userId: number;
  title: string;
};

export type PostId = Post['id'];
export type PostSort = Post['content'];

export type PostLike = {
  id: number;
  postId: number;
  userId: number;
};

export type PostsState = {
  posts: Post[];
  error: string | undefined;
};

export type Reating = {
  id: number;
  userId: number;
  title: string;
  content: string;
  likes: number;
  img: string;
};
