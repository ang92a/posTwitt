import type { User } from '../SignPage/types';

export type Post = {
  createdAt(createdAt: any): import("react").ReactNode;
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

export type Comment = {
  id: number;
  postId: number;
  userId: number;
  content: string;
  parentId: number;
};
export type PostLike = {
  id: number;
  postId: number;
  userId: number;
};

export type PostsState = {
  posts: Post[];
  error: string | undefined;
};

// export type UserSignIn = Omit<User, 'id' | 'img'>;

// export type UserSignUp = Omit<User, 'id'> & { rpassword: string };

// export type UserWithOutId = Omit<User, 'id'>;

// export type Hero = {
//   id: number;
//   name: string;
//   description: string;
//   img: string;
//   film: string;
// };

// export type HeroId = Hero['id'];

// export type HeroWithOutId = Omit<Hero, 'id'>;

// export type HeroesState = {
//   heroes: Hero[];
//   error: string | undefined;
//   loading: boolean;
// };
