import { createSlice } from '@reduxjs/toolkit';

export const seacrhSlice = createSlice({
  name: 'Поиск',
  initialState: {
    value: '',
  },
  reducers: {
    changeValue: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});
export const { changeValue } = seacrhSlice.actions;

export default seacrhSlice.reducer;
