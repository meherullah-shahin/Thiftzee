// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../configs/config';
import { setStoreLocations } from './reducer';


export const getStoreLocationsData = (latitude,longitude) => async (dispatch) => {
  
  const {data} = await axios.post(`${api}/stores/nearby`,{latitude,longitude});
  

  dispatch(setStoreLocations(data.data.stores.Items));
};
// export const getStoreLocationsData = createAsyncThunk(
//   'storeLocations/fetchStoreLocations',
//   async (latlong, { getState }) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${getState().loginReducer.token}`
//       }
//     };
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/stores/nearby`,
//         latlong,
//         config
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const getProductsData = createAsyncThunk(
//   'storeLocations/fetchProducts',
//   async (storeIds, { getState }) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${getState().loginReducer.token}`
//       }
//     };
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/products/search`,
//         storeIds,
//         config
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
