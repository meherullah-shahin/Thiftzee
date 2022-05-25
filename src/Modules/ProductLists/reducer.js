import { createSlice } from '@reduxjs/toolkit';
import { getProductsData } from './actions';

const initialState = {
  products: [],
  status: null,
  error: null
};

export const productsSlice = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    }
  },
  extraReducers: {
    [getProductsData.pending]: (state, action) => {
      state.status = 'pending';
      state.products = action.payload;
    },
    [getProductsData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    },
    [getProductsData.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    }
  }
});

const { actions, reducer } = productsSlice;
export const { setProducts } = actions;
export default reducer;
