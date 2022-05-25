import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productDetails: {}
};

export const productDetailsSlice = createSlice({
  name: 'productDetailsReducer',
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    }
  }
});

const { actions, reducer } = productDetailsSlice;
export const { setProductDetails } = actions;
export default reducer;
