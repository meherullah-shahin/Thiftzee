import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './Modules/Login/reducer';
import storeReducer from './Modules/StoreLocation/reducer';
import productsReducer from './Modules/ProductLists/reducer';
import productDetailsReducer from './Modules/ProductDetails/reducer'

const rootReducer = combineReducers({
  loginReducer,
  storeReducer,
  productsReducer,
  productDetailsReducer
});

export default rootReducer;
