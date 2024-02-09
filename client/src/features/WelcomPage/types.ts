import type { User } from '../Sign/types';

export type Post = {
  id: number;
  userid: string;
  title: string;
  content: string;
  User: User;
  Comments: Comment[];
  PostLikes: PostLike[];
};

export type Comment = {
  id: number;
  postid: number;
  userid: number;
  content: string;
  parentid: number;
};
export type PostLike = {
  id: number;
  postid: number;
  userid: number;
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
