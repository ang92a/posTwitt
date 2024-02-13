import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchLoadChats } from '../App/api';
import type { ChatState } from './types';


const initialState: ChatState = {
  dialogs: [],
  error: undefined,
  loading: true,
};

export const loadChats = createAsyncThunk('chats/load', () => fetchLoadChats());

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadChats.fulfilled, (state, action) => {
        state.dialogs = action.payload;
      })
      .addCase(loadChats.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});


export default chatSlice.reducer;
