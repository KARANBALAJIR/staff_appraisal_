// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { updateUserDetails } from './userSlice'; // Assuming you have rootReducer defined

const store = configureStore({
  reducer: {
    userDetails: updateUserDetails
  }
});

export default store;

export type RootState = ReturnType<typeof updateUserDetails>;
