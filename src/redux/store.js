import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slice/searchSlice';
import categoriesSlice from './slice/categoriesSlice';
import sortingSlice from './slice/sortingSlice';
import productSlice from './slice/productSlice';

export const store = configureStore({
  reducer: { searchSlice, categoriesSlice, sortingSlice, productSlice },
});
