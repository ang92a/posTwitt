import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Sign/authSlice';
import profilesSlice from '../features/ProfilePage/profileSlice';
import postsSlice from '../features/WelcomPage/postsSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    profiles: profilesSlice,
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
