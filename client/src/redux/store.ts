import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import profilesSlice from '../features/Page/ProfilePage/profileSlice';
import postsSlice from '../features/Page/WelcomPage/postsSlice';
import authSlice from '../features/Page/SignPage/authSlice';
import commentSlice from '../features/UI/PostItem/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profiles: profilesSlice,
    posts: postsSlice,
    comment: commentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
