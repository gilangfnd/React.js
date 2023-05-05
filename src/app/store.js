import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchCars/searchCarSlice';

export const store = configureStore({
  reducer: {
    search : searchReducer,
  },
});
