import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, title: 'пулярности', path: 'rating' },
    { id: 2, title: 'цене', path: 'price' },
    { id: 3, title: 'алфавиту', path: 'title' },
  ],
  activeSort: null,
  activePath: null,
  showModal: false,
};
export const sortingSlice = createSlice({
  name: 'Сортировка',
  initialState,
  reducers: {
    toggleShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    checkTypeSort: (state, action) => {
      state.activeSort = action.payload.id;
      state.activePath = action.payload.path;
    },
  },
});

export const { toggleShowModal, checkTypeSort } = sortingSlice.actions;

export default sortingSlice.reducer;
