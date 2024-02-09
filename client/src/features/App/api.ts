import type { User } from '../Sign/types';
import type { Post } from '../WelcomPage/types';

export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  const data: { user: User } = (await res.json()) as { user: User };
  return data.user;
};

export const fetchLoadPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/posts/check');
  const data: { posts: Post[] } = (await res.json()) as { posts: Post[] };
  return data.posts;
};
