import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Sign/authSlice';
import profilesSlice from '../features/ProfilePage/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profiles: profilesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
