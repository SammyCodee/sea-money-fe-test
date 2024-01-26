import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    // our reducers goes here
    authSlice
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;