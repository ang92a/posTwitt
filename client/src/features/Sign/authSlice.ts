import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckUser, fetchSignIn, fetchSignUp } from '../App/api';
import type { AuthState, UserSignIn, UserSignUp } from './types';

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
  loading: true
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());
export const signUp = createAsyncThunk('auth/signUp', (user: UserSignUp) => fetchSignUp(user));
export const signIn = createAsyncThunk('auth/signIn', (user: UserSignIn) => fetchSignIn(user));


// export const logout = createAsyncThunk('auth/logOut', () => fetchLogout());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
    stopLoadingAu: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(checkUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoadingAu } = authSlice.actions;

export default authSlice.reducer;
