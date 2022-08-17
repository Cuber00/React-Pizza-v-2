import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isLoadProduct: true,
};
export const productSlice = createSlice({
  name: 'Продукты',
  initialState,
  reducers: {
    installData: (state, action) => {
      console.log(action);
      state.list = action.payload;
    },
  },
});
export const { installData } = productSlice.actions;
export default productSlice.reducer;
