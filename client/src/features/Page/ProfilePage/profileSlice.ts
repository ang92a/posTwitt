import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchLoadProfiles } from '../../App/api';
import type { ProfileState } from '../SignPage/types';


const initialState: ProfileState = {
  profiles: [],
  error: undefined,
  loading: true,
};

export const loadProfiles = createAsyncThunk('profiles/load', () => fetchLoadProfiles());

const profilesSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProfiles.fulfilled, (state, action) => {
        state.profiles = action.payload;
      })
      .addCase(loadProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProfiles.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoading } = profilesSlice.actions;

export default profilesSlice.reducer;
