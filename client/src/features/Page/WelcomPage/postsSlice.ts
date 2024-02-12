import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostAdd, PostId, PostsState } from './types';
import {
  fetchAddLikePost,
  fetchAddPosts,
  fetchDelLikePost,
  fetchLoadPosts,
  fetchPostRemove,
} from '../../App/api';
import type { UserId } from '../SignPage/types';

const initialState: PostsState = {
  posts: [],
  error: undefined,
};

export const loadPosts = createAsyncThunk('posts/load', () => fetchLoadPosts());

export const AddPosts = createAsyncThunk('post/add', (post: PostAdd) => fetchAddPosts(post));

export const DelPost = createAsyncThunk('post/del', (postId: PostId) => fetchPostRemove(postId));

export const LikePost = createAsyncThunk(
  'post/like',
  (payload: { postId: PostId; userId: UserId }) => {
    const { postId, userId } = payload;
    return fetchAddLikePost({ postId, userId });
  },
);

export const DisLikePost = createAsyncThunk('post/dislike', (payload: { postId: PostId }) => {
  const { postId } = payload;
  return fetchDelLikePost(postId);
});

console.log(LikePost, 777);

const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(AddPosts.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(AddPosts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(DelPost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== +action.payload);
      })
      .addCase(DelPost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(LikePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post.id === +action.payload.id ? action.payload : post,
        );
      })
      .addCase(LikePost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(DisLikePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => (post.id === +action.payload ? { ...post } : post));
      })
      .addCase(DisLikePost.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
