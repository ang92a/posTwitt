import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Sign/authSlice';
import postsSlice from '../features/WelcomPage/postsSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
