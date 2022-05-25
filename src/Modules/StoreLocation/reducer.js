import { createSlice } from '@reduxjs/toolkit';
import { getStoreLocationsData } from './actions';

const initialState = {
  storeLocations: [],
  status: null,
  error: null
};

export const storeLocationsSlice = createSlice({
  name: 'storeReducer',
  initialState,
  reducers: {
    setStoreLocations: (state, action) => {
      state.status = 'success';
      state.storeLocations = action.payload;
    }
  },
  extraReducers: {
    [getStoreLocationsData.pending]: (state, action) => {
      state.status = 'pending';
      state.storeLocations = action.payload;
    },
    [getStoreLocationsData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.storeLocations = action.payload;
    },
    [getStoreLocationsData.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    }
  }
});

const { actions, reducer } = storeLocationsSlice;
export const { setStoreLocations } = actions;
export default reducer;
