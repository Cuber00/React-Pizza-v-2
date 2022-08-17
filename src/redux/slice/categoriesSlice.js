import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 101, title: 'Мясные' },
    { id: 102, title: 'Вегетарианская' },
    { id: 103, title: 'Гриль' },
    { id: 104, title: 'Острые' },
    { id: 105, title: 'Закрытые' },
  ],
  activeItem: null,
};

export const categoriesSlice = createSlice({
  name: 'Категории',
  initialState,
  reducers: {
    checkCategor: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { checkCategor } = categoriesSlice.actions;

export default categoriesSlice.reducer;
