import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const Store= configureStore({
    reducer: {
      users: userReducer,
    },
  });
