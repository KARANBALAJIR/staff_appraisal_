// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';// Assuming you have rootReducer defined

const store = configureStore({
  reducer: {
    userDetails: userSlice
  }
});

export default store;

export type RootState = ReturnType<typeof userSlice>;
