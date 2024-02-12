import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostsState } from './types';
import { fetchLoadPosts } from '../App/api';

const initialState: PostsState = {
  posts: [],
  error: undefined,
};

export const loadPosts = createAsyncThunk('posts/load', () => fetchLoadPosts());

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
      });
  },
});

export default authSlice.reducer;
