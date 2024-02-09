import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostAdd, PostId, PostsState } from './types';
import { fetchAddPosts, fetchLoadPosts, fetchPostRemove } from '../App/api';

const initialState: PostsState = {
  posts: [],
  error: undefined,
};

export const loadPosts = createAsyncThunk('posts/load', () => fetchLoadPosts());

export const AddPosts = createAsyncThunk('post/add', (post: PostAdd) => fetchAddPosts(post));

export const DelPost = createAsyncThunk('post/del', (postId: PostId) => fetchPostRemove(postId));


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
        console.log(action);

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
      });
  },
});

export default authSlice.reducer;
