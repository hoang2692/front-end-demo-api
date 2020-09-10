import { combineReducers } from 'redux';

import { default as productsReducer } from './products'

const reducer = combineReducers({
  products: productsReducer,
});

export default reducer;