/* eslint-disable @typescript-eslint/no-base-to-string */

import type { Post, PostAdd, PostId } from '../Page/WelcomPage/types';
import type { User, UserSignIn, UserSignUp, UserId } from '../Page/SignPage/types';
import type { CommentAdd, CommentId } from '../UI/PostItem/types';

// проверка юзера в системе
export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  const data: { user: User } = (await res.json()) as { user: User };
  return data.user;
};

// ЮЗЕРЫ
// получение всех ЮЗЕРОВ
export const fetchLoadProfiles = async (): Promise<User[]> => {
  const res = await fetch('/api/profiles/');
  const data: { profiles: User[] } = (await res.json()) as {
    profiles: User[];
  };
  return data.profiles;
};

// изменение данных Юзера
export const fetchEditProfile = async (formData: FormData): Promise<User> => {
  const res = await fetch(`/api/profiles/`, {
    method: 'POST',
    body: formData,
  });
  const data: { profile: User } = (await res.json()) as { profile: User };
  console.log(data.profile);

  return data.profile;
};

// ПОСТЫ
// получение всех ПОСТОВ

export const fetchLoadPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/posts');
  const data: { posts: Post[] } = (await res.json()) as { posts: Post[] };
  return data.posts;
};

// добавление ПОСТОВ
export const fetchAddPosts = async (post: PostAdd): Promise<Post> => {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const data: { post: Post } = (await res.json()) as { post: Post };
  return data.post;
};

// удаление ПОСТОВ
export const fetchPostRemove = async (id: PostId): Promise<PostId> => {
  const res = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  const data: { message: string; postId: PostId } = (await res.json()) as {
    message: string;
    postId: PostId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.postId;
};

// comment
export const fetchAddComment = async (comment: CommentAdd): Promise<Post> => {
  const res = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data: { post: Post } = (await res.json()) as { post: Post };
  console.log(data, 2222);

  return data.post;
};

export const fetchDelComment = async (commentDel: {
  commentId: CommentId;
  postId: PostId;
}): Promise<{ commentId: CommentId; postId: PostId }> => {
  const res = await fetch(`/api/comment/${commentDel.commentId}`, {
    method: 'DELETE',
  });
  const data: { message: string; commentId: CommentId } = (await res.json()) as {
    message: string;
    commentId: CommentId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return { commentId: +data.commentId, postId: commentDel.postId };
};

// добавление лайк ПОСТОВ
export const fetchAddLikePost = async ({
  postId,
  userId,
}: {
  postId: PostId;
  userId: UserId;
}): Promise<Post> => {
  const res = await fetch('/api/posts/like', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ postId, userId }),
  });
  const data: { post: Post } = (await res.json()) as { post: Post };
  return data.post;
};

// удаление лайк ПОСТОВ
export const fetchDelLikePost = async (
  postId: PostId,
  userId: UserId,
): Promise<{ postId: PostId; userId: UserId }> => {
  const res = await fetch(`/api/posts/dislike/${postId}`, {
    method: 'DELETE',
  });
  const data: { message: string; postId: PostId } = (await res.json()) as {
    message: string;
    postId: PostId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return { postId: data.postId, userId };
};

// РЕГИСТРАЦИЯ
export const fetchSignUp = async (user: UserSignUp): Promise<User> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  return data.user;
};

// ВХОД
export const fetchSignIn = async (user: UserSignIn): Promise<User> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }

  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  return data.user;
};

// ВЫХОД
export const fetchLogout = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = (await res.json()) as { message: string };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
};

// CHAT

// load chat

export const fetchLoadChats = async (): Promise<Dialog[]> => {
  const res = await fetch('/api/chat/');
  const data: { dialogs: Dialog[] } = (await res.json()) as {
    dialogs: Dialog[];
  };
  return data.dialogs;
};

// };