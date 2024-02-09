import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckUser } from '../App/api';
import type { AuthState } from './types';

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
